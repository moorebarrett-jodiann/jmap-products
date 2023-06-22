import { 
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logInWithGoogle,
} from '../config/firebase'
import { useState } from 'react'; 
import Modal from 'react-bootstrap/Modal'
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import LoginModal from "./LoginModal";

const forms = ["Sign In", "Register"];

function LoginForm() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [formType, setFormType] = useState(forms[0]);

  const modal = useModal(LoginModal);
  const googleLogo = <i className="fa-brands fa-google"></i>;

  
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
      case "Sign In":
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
    <div className='form-container'>
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>{formType}</h3>
        </Modal.Title>
      </Modal.Header>
      <div className="py-4 px-2">
        <form>
          <div className="container d-flex flex-column">
            <div className="form-floating mb-3 form-input-box1">
              <input 
                type="email" 
                id="email" 
                placeholder="Email"
                className="form-control" 
                value={emailInput} 
                onChange={(e) => {setEmailInput(e.target.value)}}
              />
              <label htmlFor="email" >Email</label>
              {/* <p className='form-error-message'>This field is required</p> */}
            </div>
            <div className="form-floating mb-3 form-input-box2">
              <input 
                type="password" 
                id="password" 
                placeholder="Password"
                className="form-control" 
                value={passwordInput} 
                onChange={(e) => {setPasswordInput(e.target.value)}} 
              />
              <label htmlFor="password" > Password</label>
              {/* <p className='form-error-message'>This field is required</p> */}
            </div>
            
            <input
              type="button"
              value={formType}
              className="btn btn-warning mb-3 submit-button"
              onClick={handleSubmit}
            />
            <p className='sign-in-option'>- or -</p>
            <input
              type="button"
              value="Sign In with Google"
              className="btn btn-link sign-in-google"
              onClick={handleGoogleLogin}
              data-bs-dismiss="modal"
            />
            <div className='register-option'>
              <p>Don't have an account?</p>
              <input
                type="button"
                value="Register"
                className="btn btn-link"
                onClick={handleToggleForm}
                hidden={formType === "Register"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm