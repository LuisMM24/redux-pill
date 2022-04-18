import { useState } from "react";
import "./login.scss";

export const Login: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  return (
    <main>
      {!isRegistering && (
        <section className="formWrapper">
          <h1>Login</h1>
          <form className="loginForm">
            <label htmlFor="emailInput">
              <p>Email</p>
              <input type="text" name="email" id="emailInput" />
            </label>

            <label htmlFor="emailInput">
              <p>Password</p>
              <input type="password" name="password" id="passwordInput" />
            </label>
            <div className="formButtons">
              <button type="button" onClick={() => setIsRegistering(true)}>
                Register
              </button>
              <button type="submit" onClick={() => {}}>
                Login
              </button>
            </div>
          </form>
        </section>
      )}

      {isRegistering && (
        <section className="formWrapper">
          <h1>Register</h1>
          <form className="registerForm">
            <label htmlFor="firstNameInput">
              <p>First Name</p>
              <input type="text" name="firstName" id="firstNameInput" />
            </label>

            <label htmlFor="lastNameInput">
              <p>Last Name</p>
              <input type="text" name="lastName" id="lastNameInput" />
            </label>

            <label htmlFor="emailInput">
              <p>Email</p>
              <input type="text" name="email" id="emailInput" />
            </label>

            <label htmlFor="emailInput">
              <p>Password</p>
              <input type="password" name="password" id="passwordInput" />
            </label>

            <div className="formButtons">
              <button type="button" onClick={() => setIsRegistering(false)}>
                Login
              </button>
              <button type="submit" onClick={() => {}}>
                Register
              </button>
            </div>
          </form>
        </section>
      )}
    </main>
  );
};
