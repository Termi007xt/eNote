import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Login Successful", "success");
    } else {
      props.showAlert("Login Failed", "danger");
    }
  };

  const onChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  return (
    <div className="mt-3">
      <div className="container my-3">
        <h2>Login to view notes</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={credentials.email}
              onChange={onChange}
              required
              minLength={5}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={credentials.password}
              onChange={onChange}
              required
              minLength={5}
            />
          </div>
          <button type="submit" className="btn btn-outline-success">
            Login
          </button>
          <h6 className="my-3">Don't have an account ?</h6>

          <Link class="btn btn-outline-success" to="/Signup" role="button">
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
