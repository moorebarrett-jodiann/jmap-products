import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";

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

            const emailContent = {
                to: userEmail,
                subject: `Your JMAP Order ${transactionId} has been confirmed!`,
                body: "Thank you for your order!",
            };

            const emailUrl = `mailto:${emailContent.to}?subject=${encodeURIComponent(emailContent.subject)}&body=${encodeURIComponent(emailContent.body)}`;
            
            // trigger mailto after 2 seconds
            setTimeout(() => {
                window.open(emailUrl);
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