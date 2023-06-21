import NiceModal, { useModal } from "@ebay/nice-modal-react";
import LoginModal from "./LoginModal";

function OpenLoginButton({value, classes}) {
  const modal = useModal(LoginModal);
  return (
    <button 
      className={classes} 
      // data-bs-toggle="modal" 
      // data-bs-target="#loginModal"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        modal.show();
        }}
      >{value}</button>
  )
}

export default OpenLoginButton