import { useNavigate } from 'react-router-dom';

function OrderPlaced() {
    const navigate = useNavigate();

    const goToProductsPage = () => {
        navigate('/'); 
    };

    return (
        <section className="order-placed-section">
            <div className="order-placed-container">
                <div className="order-placed-checkmark">
                    <i className="fa-solid fa-circle-check"></i>
                </div>
                <div className="order-placed-text">
                    <p className="order-placed-success">Your order has been placed</p>
                    <p className="order-id">Transaction ID:{crypto.randomUUID().substring(0, 8)}</p>
                    <button className="continue-shopping" onClick={() => goToProductsPage()}>Continue Shopping</button>
                </div>
            </div>
        </section>
    )
}

export default OrderPlaced;