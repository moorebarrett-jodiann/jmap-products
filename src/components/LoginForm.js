import { signInWithGoogle, logInWithEmailAndPassword } from '../config/firebase'
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
          <label for="email" >Email</label>
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
          <label for="password" > Password</label>
        </div>
        <button className="btn btn-primary">Sign In</button>
      </form>
    </div>
  )
}

export default LoginForm