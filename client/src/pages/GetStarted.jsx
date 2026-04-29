import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";

const GetStarted = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createAccount = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const res = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      full_name: form.name,
      email: form.email,
      password: form.password,
    }),
  });

  const data = await res.text();
  alert(data);

  if (res.ok) {
    // ✅ save user so Quiz page allows access
    localStorage.setItem(
      "user",
      JSON.stringify({
        full_name: form.name,
        email: form.email,
      })
    );

    navigate("/quiz");
  }
};
  return (
    <div className="getStartedPage">
      <section className="getStartedCard">
        <div className="getStartedIcon">✦</div>

        <h1>Create Account</h1>
        <p>Start your journey to better skin</p>

        <form className="getStartedForm" onSubmit={createAccount}>
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" placeholder="At least 6 characters" value={form.password} onChange={handleChange} required />

          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Repeat your password" value={form.confirmPassword} onChange={handleChange} required />

          <button type="submit">Create Account</button>
        </form>

        <p className="signinText">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Sign in here</span>
        </p>
      </section>
    </div>
  );
};

export default GetStarted;