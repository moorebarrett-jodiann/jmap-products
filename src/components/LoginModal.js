import LoginForm from "./LoginForm"
import Modal from 'react-bootstrap/Modal';
import NiceModal, { useModal } from '@ebay/nice-modal-react'

export default NiceModal.create(() => {
  const modal = useModal();
  return (
    <Modal 
      show={modal.visible}
      onHide={() => {modal.hide()}}
      centered
      size="sm"
    >
      <LoginForm/>
    </Modal>
  )
})
