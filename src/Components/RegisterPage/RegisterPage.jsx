import React, { useState } from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [emailAddress, setEmailAddress] = useState("");
  const [name, setName] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const emailAddressUpdater = (event) => {
    setEmailAddress(event.target.value);
  };

  const nameUpdater = (event) => {
    setName(event.target.value);
  };

  const createPasswordUpdater = (event) => {
    setCreatePassword(event.target.value);
  };

  //   const confirmPasswordUpdater = (event) => {
  //     setConfirmPassword(event.target.value);
  //   };

  const buttonCreateAccount = (event) => {
    event.preventDefault();

    const isEmailValid = emailAddress.length >= 3;
    const isPasswordCharLengthValid =
      createPassword.length >= 6 && createPassword.length <= 30;
    const isNameValid = name.length >= 3;
    const isConfirmPasswordLengthValid = isPasswordCharLengthValid;

    if (
      isEmailValid &&
      isPasswordCharLengthValid &&
      isNameValid &&
      isConfirmPasswordLengthValid
    ) {
      console.log("true email and pass", emailAddress, createPassword, name);
      navigate("/home");
    } else {
      alert("Please enter correct data");
    }
  };

  return (
    // <div className="create-account-box">

    //     <label htmlFor="email">  <i class="fa-solid fa-at"></i> Email</label>
    //     <input type="email" placeholder='email' id="email" name="email" value={emailAddress} onChange={emailAddressUpdater}/>

    //     <label htmlFor="name"> <i class="fa-solid fa-user"></i>  Name</label>
    //     <input type="string" placeholder='name' id="name" name="name" value={name} onChange={nameUpdater}/>

    //     <label htmlFor="password"> <i class="fa-solid fa-lock"></i> Create password</label>
    //     <input type="password" placeholder='password' id="password" name="password" value={createPassword} onChange={createPasswordUpdater}/>

    //     <label htmlFor="password"> <i class="fa-solid fa-lock"></i> Confirm password</label>
    //     <input type="password" placeholder='password' id="password" name="password" value={confirmPassword} onChange={confirmPasswordUpdater}/>

    //     <button type='button' onClick={buttonCreateAccount}>
    //     <p>Create Account </p>
    //     </button>

    // </div>

    <div className="register-box-wrapper">
      <div className="register-box-main-container">
        <div className="register-box-header">
          <img
            className="register-box-header-picture"
            src="instagram_logo.svg.png"
            alt="Instagram"
          />
          <p className="header-text">
            {" "}
            Регистрирайте се, за да виждате снимки и видеоклипове от вашите
            приятели.
          </p>
          <button className="button-login-FB" type="button">
            <i class="fa-brands fa-square-facebook"></i> Влизане с Facebook
          </button>
          <p className="header-text-or"> ИЛИ </p>
        </div>

        <div className="register-box-information-for-user">
          <input
            type="email"
            id="email"
            placeholder="Телефонен номер или имейл"
            value={emailAddress}
            onChange={emailAddressUpdater}
          />

          <input type="string" placeholder="Пълно име" id="name" />

          <input
            type="text"
            id="full-name"
            placeholder="Потребителско име"
            value={name}
            onChange={nameUpdater}
          />

          <input
            type="password"
            id="password"
            placeholder="Парола"
            value={createPassword}
            onChange={createPasswordUpdater}
          />
        </div>

        <div className="information-box-for-privacy-policy">
          <p className="text-term-instagram">
            Хората, които използват нашата услуга, може да са качили
            информацията ви за контакт в Instagram.{" "}
            <a href="">Научете повече</a>
          </p>

          <p className="text-privacy">
            Когато се регистрирате, вие се съгласявате с нашите Условия. Научете
            как събираме, използваме и споделяме данните ви в нашата Политика за
            поверителност, както и как използваме бисквитките и сходни
            технологии в нашата Политика за бисквитки.{" "}
          </p>
        </div>

        <button
          className="button-to-register-user"
          type="button"
          onClick={buttonCreateAccount}
        >
          {" "}
          Напред
        </button>
      </div>

      <div className="login-with-account-box">
        <p className="text-we-have-account"> Имате акаунт? </p>
        <p className="login-with-account"> Влезте </p>
      </div>

      <div className="register-download-app">
        <p className="register-download-app-text"> Изтеглете приложението</p>
        <img className="register-google-pic" src="google.png" alt="google" />
        <img
          className="register-microsoft-pic"
          src="microsoft.png"
          alt="microsoft"
        />
      </div>
    </div>
  );
}

export default RegisterPage;
