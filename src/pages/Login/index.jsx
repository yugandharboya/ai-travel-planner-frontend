import { useState } from "react";
import { BASE_URL } from "../../constants/constants";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitLoginForm = async (event) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("All fields are required");
      return;
    }

    const token = Cookies.get("jwt_token");
    const userData = {
      email: email,
      password: password,
    };
    const url = `${BASE_URL}/auth/login`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    try {
      const response = await fetch(url, options);

      let data;
      try {
        data = await response.json();
      } catch (error) {
        data = {};
      }

      if (!response.ok) {
        setError(data.message || "Login failed. Please try again.");
        return;
      }
      if (data.token) {
        Cookies.set("jwt_token", data.token, { expires: 1 });
      }
      navigate("/");
      setError("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError("An error occurred while logging in");
      console.log("error: ", error);
    }
  };
  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={submitLoginForm}>
          <div className="login-form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="error-msg">{error}</p>
        <div className="login-footer">
          <p>Don't have an account?</p>
          <a href="/register" className="navigator-link">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
