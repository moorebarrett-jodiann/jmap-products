import { 
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logInWithGoogle,
} from '../config/firebase'
import { useState } from 'react'; 
import Modal from 'react-bootstrap/Modal'
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import LoginModal from "./LoginModal";

const forms = ["Sign in", "Register"];

function LoginForm() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [formType, setFormType] = useState(forms[0]);

  const modal = useModal(LoginModal);

  
  const handleLogin = async () => {
    try {
      const res = await logInWithEmailAndPassword(emailInput, passwordInput);
      if(res) {
        modal.remove()
      }
    } catch(error) {
      console.error(error);
    }
  }

  const handleRegister = async () => {
    try {
      const res = await registerWithEmailAndPassword(emailInput, passwordInput);
      if(res) {
      modal.remove()
      }
    } catch(error) {
      console.error(error);
    }
  }

  const handleGoogleLogin = () => {
    logInWithGoogle();
    modal.remove();
  }

  const handleSubmit = () => {
    switch(formType) {
      case "Sign in":
        handleLogin();
        break;

      case "Register":
        handleRegister();
        break;
    }
  }

    const handleToggleForm = () => {
    if(formType === forms[0]) {
      setFormType(forms[1]);
    } else {
      setFormType(forms[0]);
    }
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          {formType}
        </Modal.Title>
      </Modal.Header>
      <div className="container p-2">
        <form>
          <div className="container d-flex flex-column">
            <div className="form-floating mb-3">
              <input 
                type="email" 
                id="email" 
                placeholder="Email"
                className="form-control" 
                value={emailInput} 
                onChange={(e) => {setEmailInput(e.target.value)}}
              />
              <label htmlFor="email" >Email</label>
            </div>
            <div className="form-floating mb-3">
              <input 
                type="password" 
                id="password" 
                placeholder="Password"
                className="form-control" 
                value={passwordInput} 
                onChange={(e) => {setPasswordInput(e.target.value)}} 
              />
              <label htmlFor="password" > Password</label>
            </div>
            <input
              type="button"
              value={formType}
              className="btn btn-warning mb-3"
              onClick={handleSubmit}
            />
            <input
              type="button"
              value="Register"
              className="btn btn-link"
              onClick={handleToggleForm}
              hidden={formType === "Register"}
            />
            <input
              type="button"
              value="Login with Google"
              className="btn btn-link"
              onClick={handleGoogleLogin}
              data-bs-dismiss="modal"
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm