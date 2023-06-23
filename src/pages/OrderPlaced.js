import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { auth } from "../config/firebase";
import emailjs from '@emailjs/browser';

function OrderPlaced() {
    const[transactionId] = useState(crypto.randomUUID().substring(0, 8));

    const navigate = useNavigate();

    const goToProductsPage = () => {
        navigate('/'); 
    };

    useEffect(() => {
        // Get the currently logged-in user
        const user = auth.currentUser; 

        // Check if a user is logged in
        if (user) {
            // Get the user's email address
            const userEmail = user.email; 
            
            setTimeout(() => {
                var templateParams = {
                    to_name: userEmail,
                    transactionId: transactionId
                };
                 
                emailjs.send('service_7htp166', 'template_b6nvrn8', templateParams, 'Dl0k835aaHSwkYA5u')
                    .then(function(response) {
                       console.log('SUCCESS!', response.status, response.text);
                    }, function(error) {
                       console.log('FAILED...', error);
                    });
            }, 2000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="order-placed-section">
            <div className="order-placed-container">
                <div className="order-placed-checkmark">
                    <i className="fa-solid fa-circle-check"></i>
                </div>
                <div className="order-placed-text">
                    <p className="order-placed-success">Your order has been placed</p>
                    <p className="order-id">Order ID: <span>{transactionId}</span></p>
                    <button className="continue-shopping" onClick={() => goToProductsPage()}>Continue Shopping</button>
                </div>
            </div>
        </section>
    )
}

export default OrderPlaced;