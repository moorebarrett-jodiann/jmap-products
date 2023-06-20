import OpenLoginButton from "./OpenLoginButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../config/firebase";


function LoginHeader() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="d-flex">
      {
        user === null ? 
        <OpenLoginButton classes="btn" value="Login" />
        : 
        <div className="d-flex h-100 align-items-center">
          <div className="welcome text-muted mx-4">
            <p>Welcome <span>{user.email}</span></p>
          </div>
          <button onClick={logout}>Logout</button>
        </div>
      }
    </div>
  )
}

export default LoginHeader;