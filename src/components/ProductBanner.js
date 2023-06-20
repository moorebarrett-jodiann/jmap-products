import { useState, useEffect } from 'react';
import banner1 from '../images/banners/banner-1.jpg';
import banner2 from '../images/banners/banner-2.jpg';
import banner3 from '../images/banners/banner-3.jpg';
import banner4 from '../images/banners/banner-4.jpg';
import banner5 from '../images/banners/banner-5.jpg';

function ProductBanner() {
    const banners = [banner1, banner2, banner3, banner4, banner5];
    const [currentBanner, setCurrentBanner] = useState(0);

    const changeBanner = () => {
        setCurrentBanner((prevIndex) => (prevIndex + 1) % banners.length);
    };

    useEffect(() => {
        const interval = setInterval(changeBanner, 4000);
        // Clean up the interval on component unmount
        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="banner-carousel">
            <div className="banner-wrapper">
                {banners.map((banner, index) => (
                <figure
                    key={index}
                    className={`banner-image ${index === currentBanner ? 'current' : ''}`}
                >
                    <img src={banner} alt={`Banner ${index + 1}`} />
                </figure>
                ))}
            </div>
            <div className="dot-group">
                {banners.map((arr, index) => (
                <span
                    key={index}
                    className={`dot ${index === currentBanner ? 'active' : ''}`}
                    onClick={() => setCurrentBanner(index)}
                />
                ))}
            </div>
        </div>
    );
}

export default ProductBanner;
