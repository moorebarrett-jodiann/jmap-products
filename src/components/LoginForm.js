import { 
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logInWithGoogle,
} from '../config/firebase'
import { useState } from 'react'; 


function LoginForm({formType, onToggleForm}) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const clearForm = () => {
    setEmailInput('');
    setPasswordInput('');
  }

  
  const handleLogin = async () => {
    try {
      const res = await logInWithEmailAndPassword(emailInput, passwordInput);
      if(res) {
        clearForm();
      }
      // close and clear form
    } catch(error) {
      console.error(error);
    }
  }

  const handleRegister = async () => {
    try {
      const res = await registerWithEmailAndPassword(emailInput, passwordInput);
      if(res) {
      clearForm();
      }
    } catch(error) {
      console.error(error);
    }

  }

  const handleGoogleLogin = () => {
    logInWithGoogle();
    clearForm();
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

  return (
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
            onClick={onToggleForm}
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
  )
}

export default LoginForm