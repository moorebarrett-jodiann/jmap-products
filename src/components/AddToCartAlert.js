function AddToCartAlert(prop) {
  return (
    <div className={`alert alert-success 
    text-center fixed-top ${(!prop.isShown && 'd-none')}`} 
    role="alert">
        <i className="fa-regular fa-circle-check"></i> A 
        Item added to your cart!
    </div>
  )
}

export default AddToCartAlert