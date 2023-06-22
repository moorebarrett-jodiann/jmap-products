import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm";
import Modal from 'react-bootstrap/Modal';
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { useState } from 'react';


export default NiceModal.create(() => {

  const modal = useModal();
  const [isNewUser, setIsNewUser] = useState(false);
  const handleNewUser = () => {setIsNewUser(true)};

  return (
    <Modal 
      show={modal.visible}
      onHide={() => {modal.remove()}}
      size="sm"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {isNewUser ? "Register" : "Sign in"}
        </Modal.Title>
      </Modal.Header>
      {isNewUser ? 
        <RegisterForm />
        :
        <LoginForm handleToggleForm={handleNewUser}/>
      }
    </Modal>
  )
})
