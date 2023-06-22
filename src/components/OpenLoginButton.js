import NiceModal, { useModal } from "@ebay/nice-modal-react";
import LoginModal from "./LoginModal";

function OpenLoginButton({value, classes}) {
  const modal = useModal(LoginModal);
  return (
    <div className="d-flex h-100 align-items-center">
      <button 
        className={classes} 
    
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          modal.show();
          }}
        >{value}</button>
    </div>
  )
}

export default OpenLoginButton