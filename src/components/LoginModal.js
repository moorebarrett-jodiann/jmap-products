import LoginForm from "./LoginForm"


function LoginModal() {
  return (
  
    <div className="modal fade" id="loginModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default LoginModal