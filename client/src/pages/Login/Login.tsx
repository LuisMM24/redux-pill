import { useState } from "react";

export const Login: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  return (
    <section>
      <form className="loginForm">
        <label htmlFor="emailInput">Email</label>
        <input type="text" name="email" id="emailInput" />

        <label htmlFor="emailInput">Password</label>
        <input type="password" name="password" id="passwordInput" />
      </form>
      {isRegistering && <form className="registerForm"></form>}
    </section>
  );
};
