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
      onShow={() => {}}
    >

      <LoginForm/>
    </Modal>
  )
})

// function LoginModal() {

//   const [formType, setFormType] = useState(forms[0]);

//   const handleSwitchForm = () => {
//     if(formType === forms[0]) {
//       setFormType(forms[1]);
//     } else {
//       setFormType(forms[0]);
//     }
//   }

  
// }


/*
  Old Modal
  <div className="modal fade" id="loginModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{formType}</h3>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <LoginForm formType={formType} onToggleForm={handleSwitchForm}/>
        </div>
      </div>
    </div>
*/