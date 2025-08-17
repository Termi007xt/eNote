import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Signup Failed", "danger");
    }
  };

  const onChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  return (
    <div className="mt-3">
      <div className="container my-3">
        <h2>Create your account</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={credentials.name}
              onChange={onChange}
              required
              minLength={5}
            />
          </div>
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
            Signup
          </button>

          <h6 className="my-3">Already have an account ?</h6>

          <Link class="btn btn-outline-success" to="/Login" role="button">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
