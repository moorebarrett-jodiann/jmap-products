import { 
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logInWithGoogle,
} from '../config/firebase'
import { useState } from 'react'; 


function LoginForm() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <div className="container">
      <form>
        <div className="form-floating">
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
        <div className="form-floating">
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
          className="btn btn-primary"
          onClick={() => {logInWithEmailAndPassword(emailInput, passwordInput)}}
        />
        <input
          type="button"
          value="Register"
          className="btn btn-outline-primary"
          onClick={() => {registerWithEmailAndPassword(emailInput, passwordInput)}}
        />
        <input
          type="button"
          value="Login with Google"
          className="btn btn-danger"
          onClick={() => logInWithGoogle()}
        />
      </form>
    </div>
  )
}

export default LoginForm