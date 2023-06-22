import { 
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logInWithGoogle,
} from '../config/firebase'
import { useState } from 'react'; 
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import LoginModal from "./LoginModal";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function LoginForm() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [wasValidated, setWasValidated] = useState(false);

  const modal = useModal(LoginModal);

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


  return (
    <>
      <div className="container p-2">
        <form className="needs-validation" noValidate>
          <div className="container d-flex flex-column">

            <div className="form-floating mb-3 input-group has-validation">
              <input 
                type="email" 
                id="email" 
                placeholder="Email"
                className="form-control" 
                value={emailInput} 
                onChange={(e) => {setEmailInput(e.target.value)}}
                required
              />
              <label className="form-label" htmlFor="email" >Email</label>
            </div>
            <div className="form-floating mb-3 input-group has-validation">
              <input 
                type="password" 
                id="password" 
                placeholder="Password"
                className="form-control" 
                value={passwordInput} 
                onChange={(e) => {setPasswordInput(e.target.value)}} 
                required
              />
              <label className="form-label" htmlFor="password" > Password</label>
            </div>
            <input
              type="button"
              value="Register"
              className="btn btn-warning mb-3"
              onClick={handleRegister}
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