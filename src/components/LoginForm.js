import { logInWithEmailAndPassword, logInWithGoogle } from '../config/firebase'
import { useState } from 'react'; 
import { useModal } from "@ebay/nice-modal-react";
import LoginModal from "./LoginModal";

function LoginForm({handleToggleForm}) {
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [wasValidated, setWasValidated] = useState(false);

	const modal = useModal(LoginModal);

	const handleLogin = async () => {
		try {
			const res = await logInWithEmailAndPassword(emailInput, passwordInput);
		if(res) {
			modal.remove()
		}

		setWasValidated(true);
		
		} catch(error) {
			console.error(error);
		}
	}


	const handleGoogleLogin = () => {
		logInWithGoogle();
		modal.remove();
	}

	return (
		<div className="container p-2 form-container">
			<form className="needs-validation" noValidate>
				<div className="container d-flex flex-column">
				<div className="form-floating mb-3 has-validation form-input-box-1">
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
				<div className="form-floating mb-3 form-input-box-2">
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
				<div className="error-message">
					{wasValidated ? <p className='text-danger font-sm'>Username or password incorrect</p> : <></>}
				</div>
				<input
					type="button"
					value="Sign in"
					className="btn btn-warning my-3 submit-button"
					onClick={handleLogin}
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
					/>
				</div>
				</div>
			</form>
		</div>
	)

}

export default LoginForm;