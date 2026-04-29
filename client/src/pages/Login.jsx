import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });

    const data = await res.json();

    if (data.message === "Login success") {
      alert("Login success");

      // save user
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/quiz");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="loginPage">
      <nav className="navbar">
        <div className="brand">
          <div className="brandIcon">✦</div>
          <span>GlowTrack</span>
        </div>

        <div className="navRight">
          <a href="#">Sign In</a>
          <button onClick={() => navigate("/get-started")}>Get Started</button>
        </div>
      </nav>

      <main className="centerWrapper">
        <section className="loginCard">
          <div className="mainIcon">✦</div>

          <h1>Welcome Back</h1>
          <p>Sign in to continue your glow journey</p>

          <form className="loginForm" onSubmit={handleLogin}>

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button type="submit">Sign In</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;