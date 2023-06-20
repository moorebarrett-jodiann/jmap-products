import ProductCards from "../components/ProductCards";
import ProductBanner from "../components/ProductBanner";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Product() {

    const [items, setItems] = useState([]);
    const [message, setMessage] = useState("Loading products ...");
    const API_URL = 'https://fakestoreapi.com/products';
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(API_URL)
            .then(result => {
                setItems(result.data);
            })
            .catch(error => {
                setMessage('No products found ...');
            });
        // '[]' ensures that the request is made only when the component mounts
    }, []);

    // Navigate to detail page if a card is clicked
    const handleClick = (item) => {
        // Use navigate function for redirection
        navigate(`/${item.id}`); 
    };

    return (
        <>
            <section className="main-container">
                {items.length > 0 ? (
                <>
                    <ProductBanner />
                    <div className="product-wrapper">
                        <div className="heading">
                            <h2>Browse our collections</h2>
                        </div>
                        <div className="product-grid">
                            <ProductCards
                                items={items}
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                </>
                ) : (
                    <div className="error-container">
                        <p className="loading">{message}</p>
                    </div>
                )}
            </section>
        </>
    )
}

export default Product