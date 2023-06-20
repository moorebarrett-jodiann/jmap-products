
function OpenLoginButton({value, classes}) {
  return (
    <button 
      className={classes} 
      data-bs-toggle="modal" 
      data-bs-target="#loginModal">{value}</button>
  )
}

export default OpenLoginButton