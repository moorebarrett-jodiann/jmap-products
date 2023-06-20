import LoginForm from "./LoginForm"


function LoginModal() {
  return (
  
    <div className="modal fade" id="loginModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Sign in</h3>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default LoginModal