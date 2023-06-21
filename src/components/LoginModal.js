import LoginForm from "./LoginForm"
import { useState } from "react"
import Modal from 'bootstrap/js/dist/modal';

const forms = ["Sign in", "Register"];

function LoginModal() {

  const [formType, setFormType] = useState(forms[0]);

  const handleSwitchForm = () => {
    if(formType === forms[0]) {
      setFormType(forms[1]);
    } else {
      setFormType(forms[0]);
    }
  }

  return (
  
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
    
  )
}

export default LoginModal