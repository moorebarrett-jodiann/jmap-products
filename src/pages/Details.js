import AddToCartAlert from "../components/AddToCartAlert";
import  axios  from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Stars from '../components/Stars';

function Details() {
    const auth = getAuth();
    const user = auth.currentUser;
    const [currentItemsInCart, setCurrentItemsInCart] = useState(
        JSON.parse(localStorage.getItem('Cart')
    ));
    const [newItem, setNewItem] = useState({});
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

        if(user) {
            // Show Alert
            setAlertIsShown(true);

            setTimeout(() => {
                setAlertIsShown(false);
            }, 2000);

            // Add item info to users property
            setCurrentItemsInCart(current => [newItem, ...current]);
        } else {
            // SHOW LOGIN MODAL
            console.log('User not logged in')
        }
    };

    useEffect(() => {
        localStorage.setItem('Cart', JSON.stringify(currentItemsInCart));
    }, [addItem]);
    
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
                            <button onClick={(event) => {
                                addItem(event);
                                setNewItem({ 
                                    id: selectedProduct.id, 
                                    image: selectedProduct.image, 
                                    title: selectedProduct.title,
                                    rating: selectedProduct.rating.rate,
                                    count: selectedProduct.rating.count,
                                    price: selectedProduct.price
                                });
                            }} className="product-add-to-cart">Add to cart</button>
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