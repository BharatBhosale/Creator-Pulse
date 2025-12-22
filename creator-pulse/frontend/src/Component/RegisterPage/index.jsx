import React, { useState } from "react";
import "./style.css";

const RegisterPage = ({ setIsLoggedIn, setNavSelection, setIsBlogVisible }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform registration here
    setIsLoggedIn(true);
    setIsBlogVisible(true);
    setNavSelection("Home");
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2>Create account</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="submit-btn">
            Create account
          </button>
        </form>

        <p className="muted">
          Already have an account?{" "}
          <button className="link-btn" onClick={() => setNavSelection("LogIn")}>
            Login
          </button>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
