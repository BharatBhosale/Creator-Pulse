import React, { useState } from "react";
import "./style.css";

const RegisterPage = ({ setIsLoggedIn, setNavSelection }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    fullName: name,
    emailId: email,
    password: password,
  };

  try {
    const response = await fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text(); // get raw response

    // 🔥 IMPORTANT FIX
    if (!response.ok) {
      alert(text); // show backend message
      return;
    }

    // Success case
    alert("Registration successful! Please login.");
    setNavSelection("LogIn");

  } catch (error) {
    console.error(error);
    alert("Server error. Please try again later.");
  }
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
