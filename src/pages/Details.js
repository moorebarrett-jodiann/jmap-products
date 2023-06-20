import AddToCartAlert from "../components/AddToCartAlert";
import  axios  from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Stars from '../components/Stars';

function Details() {
    const [alertIsShown, setAlertIsShown] = useState(false);

    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null)

    const url = `https://fakestoreapi.com/products/${id}`;    
    
    useEffect(() => {
        axios
        .get(url)
        .then((res) => {
          setSelectedProduct(res.data);
        })
        .catch((error) => {
            console.log(error.message);
        }); 

        window.scrollTo(0,0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
    const addItem = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setAlertIsShown(true);

        setTimeout(() => {
            setAlertIsShown(false);
        }, 2000);
    };
    
    return (
    <>
        {selectedProduct? (
        <>
            <AddToCartAlert 
                isShown={alertIsShown}
            />
            <section className="details-page">
            <div className="main-container">
                <div className="product-details">
                    <figure>
                        <img src={selectedProduct.image} alt={selectedProduct.title}/>
                    </figure>
                    <div className="product-info">
                        <h2 className="product-title">{selectedProduct.title}</h2>
                        <div className='product-stars'>
                            <Stars rating={selectedProduct.rating.rate} />
                            <div className='product-rating-count'>({selectedProduct.rating.count}) customer reviews</div>
                        </div>
                        <p className='product-price'>$ {selectedProduct.price}</p>
                        <div className='buttons'>
                            <button className="product-buy">Buy Now</button>
                            <button className="product-add-to-cart">Add to cart</button>
                        </div>
                        <div className='product-delivery'>
                            <p>
                            <i className="fa-solid fa-truck-arrow-right"></i> Return policy: Eligible for Return, Refund or Replacement
                                within 30 days of receipt
                            </p>
                        </div>
                        <div className='product-description'>
                            <h3>Description</h3>
                            <p className='product-description-text'>{selectedProduct.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>) : (<></>)
        }
    </>
  )
}

export default Details;