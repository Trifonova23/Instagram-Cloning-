import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailUpdater = (event) => {
    setEmail(event.target.value);
    // console.log(event);
  };

  const passwordUpdater = (event) => {
    setPassword(event.target.value);
    // console.log(event);
  };

  const onSubmitButton = (event) => {
    event.preventDefault();
    // console.log("mail", email);
    // console.log("pass", password);
    if (email.length >= 3 && password.length >= 6 && password.length <= 30) {
      console.log("true email and pass", email, password);
      navigate("/home");
    } else {
      alert("Wrong email or password");
    }
  };
  return (
    <div className="login-page-wrapper">
      <div className="instagram-login-picture">
        <img src="instagram-login-pic.png" alt="login-pic" />
      </div>
      <div className="login-page-main-container">
        <div className="login-box">
          <div className="login-box-header-picture">
            <img src="instagram_logo.svg.png" alt="" />
          </div>

          <div className="input-box-date">
            <div htmlFor="email-for-login">
              <input
                type="email"
                placeholder="Телефонен номер, потребителско име или ... "
                id="email"
                name="email"
                value={email}
                onChange={emailUpdater}
              />
            </div>

            <div htmlFor="password-for-login">
              <input
                type="password"
                placeholder="Парола"
                id="password"
                name="password"
                value={password}
                onChange={passwordUpdater}
              />
            </div>

            <div className="button-for-login-box">
              <button
                className="button-for-login"
                type="button"
                onClick={onSubmitButton}
              >
                <p> Вход </p>
              </button>
            </div>

            <div className="box-for-text">
              <p> ИЛИ </p>
            </div>

            <div className="login-with-Facebook">
              <p>
                {" "}
                <i class="fa-brands fa-square-facebook"></i> Влизане с Facebook
              </p>
            </div>

            <div className="forgot-password-box">
              <p> Забравена парола?</p>
            </div>
          </div>
        </div>
        <div className="create-account-box">
          <div className="create-account">
            <p className="no-account"> Нямате акаунт? </p>
            <p className="for-register"> Регистрация</p>
          </div>
        </div>

        <div className="download-app-box"></div>
        <div className="download-app">
          <p> Изтеглете приложението </p>
          <img className="img-google" src="google.png" alt="google pic" />
          <img
            className="img-microsoft"
            src="Microsoft.png"
            alt="microsoft pic"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
