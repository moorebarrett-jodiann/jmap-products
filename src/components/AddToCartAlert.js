function AddToCartAlert(prop) {
  return (
    <div className={`alert alert-success text-center fixed-top ${(!prop.isShown && 'd-none')}`} role="alert">        
        <p className="add-to-cart-alert">
          <i className="fa-regular fa-circle-check"></i>
          Item was successfully added to your cart!
        </p>
    </div>
  )
}

export default AddToCartAlert;