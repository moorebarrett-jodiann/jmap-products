import { 
  registerWithEmailAndPassword,
  logInWithGoogle,
} from '../config/firebase'
import { useState } from 'react'; 
import { useForm} from 'react-hook-form';
import { useModal } from "@ebay/nice-modal-react";
import LoginModal from "./LoginModal";


function LoginForm() {
  const [wasValidated, setWasValidated] = useState(false);
  const {register, handleSubmit, formState: {errors}} = useForm();

  const modal = useModal(LoginModal);

  const handleRegister = async (data) => {
    setWasValidated(true);
    try {
      const res = await registerWithEmailAndPassword(data.email, data.password);
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
      <div className="container p-2 register-form-container">
        <form onSubmit={() => {
          setWasValidated(true);
          handleSubmit(handleRegister)}} noValidate>
          <div className="container d-flex flex-column">
            <div className="form-floating mb-3 has-validation register-form-input-box-1">
              <input 
                type="email" 
                id="email" 
                placeholder="Email"
                className={"form-control " + (wasValidated ? errors.email ? "is-invalid" : "is-valid" : "")}  
                required
                {...register("email", {
                  required: "Email Address is required.", 
                  pattern: {
                      value: /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/,
                      message: "Invalid email address",
                  },
              })}
                aria-invalid={errors.email ? "true" : "false"} 
              />
              <label className="form-label" htmlFor="email" >Email</label>
              <div className='email-error-message '>
                <div className="invalid-feedback">{errors.email ? errors.email.message : ""} error</div>
              </div>
            </div>
            <div className="form-floating mb-3 register-form-input-box-2">
              <input 
                type="password" 
                id="password" 
                placeholder="Password"
                className={"form-control" + (wasValidated ? errors.password ? "is-invalid" : "is-valid" : "")} 
                required
                aria-invalid={errors.password ? "true" : "false"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {value: 8, message: "Minimum 8 characters."}
                })}

              />
              <label className="form-label" htmlFor="password">Password</label>
              <div className='password-error-message'>
                <div className="px-2 invalid-feedback">{errors.password ? errors.password.message : ""}</div>
              </div>
            </div>
            <input
              type="button"
              value="Register"
              className="btn btn-warning mb-3 register-button"
              onClick={() => {
                setWasValidated(true);
                handleSubmit(handleRegister)
              }}
            />
            <p className='sign-in-option'>- or -</p>
            <input
              type="button"
              value="Sign In with Google"
              className="btn btn-link sign-in-google"
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