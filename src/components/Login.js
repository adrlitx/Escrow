import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import "../App.css";
import Header from "./Header";

function Login(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onLogin();
  }

  return (
    <>
      <Header isLoggedIn={false}  />
      <div className="login-wrapper">
        <div className="login-container">
          <div className="card">
            <h2 className="title">Login</h2>
            <p className="description">Access your transaction status and history.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label htmlFor="username">Username/Email</label>
                <input type="text" id="username" name="username" required />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
              <div>
                <a href="localhost:3000" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
              <div></div>
            </form>
            <div className="separator">or</div>
            <div className="alt-login">
              <button
                onClick={() => console.log("Login with Google")}
                className="google-button"
              >
                <GoogleIcon fontSize="medium" />
                <span>Login with Google</span>
              </button>
            </div>
          </div>
        </div>
        <div className="signup">
          <div>New to our Escrow Service?</div>
          <div>
            <a href="localhost:3000" className="signup-link">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

