import  axios  from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useCallback, useState } from "react";

function Details() {

    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState([])
    const [productRatingObj, setProductRatingObj] = useState({});
    let rating = Math.trunc(productRatingObj.rate);

    const getProductDetails = useCallback(async () => {

        const url = `https://fakestoreapi.com/products/${id}`;
    
        axios
        .get(url)
        .then((res) => {
            console.log(res.data)
          setSelectedProduct(res.data);
          setProductRatingObj(res.data.rating);
        })
        .catch((error) => {
            console.log(error.message);
        }); 
        
      },[]);
    
    
      useEffect(() => {
        getProductDetails();
        window.scrollTo(0,0);
    },[getProductDetails])
    
    return (
    <section className="details-page">
        <div className="main-container">
            <div className="product-details">
                <figure>
                    <img src={selectedProduct.image} alt={selectedProduct.title}/>
                </figure>
                <div className="product-info">
                    <h2 className="product-title">{selectedProduct.title}</h2>
                    <p className='product-description'>{selectedProduct.description}</p>
                    <p className='product-stars'>
                        {[...Array(5)].map((star, i) => {
                            return (
                                <i key={i} className={`fa-solid fa-star
                                ${(rating >= i && 'yellow-star')}`}></i>
                            )
                        })} {`(${productRatingObj.count})`}
                    </p>
                    {/* <div className='divider'></div> */}
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
                </div>
            </div>
        </div>
    </section>
  )
}

export default Details;