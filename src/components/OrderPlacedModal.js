import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function OrderPlacedModal() {
    const navigate = useNavigate();

    const goToProductPage = () => {
        navigate('/'); 
    };

  return (
    <Modal show={true} centered fade>
        <div className="order-placed-container">
            <div className="order-placed-checkmark">
                <i className="fa-solid fa-circle-check"></i>
            </div>
            <div className="order-placed-text">
                <p className="order-placed-success">Your order has been placed</p>
                <p className="order-id">Transaction ID:{crypto.randomUUID().substring(0, 8)}</p>
                <button className="continue-shopping" onClick={() => goToProductPage()}>Continue Shopping</button>
            </div>
        </div>
    </Modal>
  )
}

export default OrderPlacedModal;