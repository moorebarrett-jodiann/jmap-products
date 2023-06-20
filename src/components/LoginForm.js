import { 
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logInWithGoogle,
} from '../config/firebase'
import { useState } from 'react'; 


function LoginForm() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleLogin = () => {
    logInWithEmailAndPassword(emailInput, passwordInput);
  }

  const handleRegister = () => {
    registerWithEmailAndPassword(emailInput, passwordInput);
  }

  const handleGoogleLogin = () => {
    logInWithGoogle();

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
            value="Sign In"
            className="btn btn-warning mb-3"
            onClick={handleLogin}
          />
          <input
            type="button"
            value="Register"
            className="btn btn-link"
            onClick={handleRegister}
          />
          <input
            type="button"
            value="Login with Google"
            className="btn btn-link"
            onClick={handleGoogleLogin}
          />
        </div>

      </form>
    </div>
  )
}

export default LoginForm