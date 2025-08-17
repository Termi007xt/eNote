import React from "react";

const About = () => {
  return (
    <>
      <div className="container py-4">
        <h1>iNotebook — Secure MERN Notes (JWT • Protected Routes • CRUD)</h1>

        <p>
          A lightweight, secure notes app built on the <strong>MERN</strong>{" "}
          stack. Users sign up/log in with <strong>JWT</strong>, then perform
          full <strong>CRUD</strong> on notes via protected
          <strong> REST APIs</strong>. Client routing uses{" "}
          <strong>React Router v6</strong> with an auth guard (
          <code>RequireAuth</code>), sessions persist via{" "}
          <code>localStorage</code>, and expired/invalid tokens auto-logout.
        </p>

        <hr />

        <h2>✨ Features</h2>
        <ul>
          <li>
            <strong>Auth</strong>: Signup/Login with <strong>JWT</strong>,
            bcrypt-hashed passwords, protected routes
          </li>
          <li>
            <strong>Notes CRUD</strong>: Create, Read, Update, Delete via REST
            endpoints
          </li>
          <li>
            <strong>State</strong>: React <strong>Context API</strong> for
            global notes/auth state
          </li>
          <li>
            <strong>Routing</strong>: React Router v6 + <code>RequireAuth</code>{" "}
            (redirect to <code>/login</code> when no token)
          </li>
          <li>
            <strong>Persistence</strong>: Token in <code>localStorage</code>{" "}
            (remember last logged-in user)
          </li>
          <li>
            <strong>Security</strong>: Auth header, 401 handling, logout clears
            token
          </li>
          <li>
            <strong>Dev UX</strong>: Clear alerts, responsive UI, easy
            Postman/cURL testing
          </li>
        </ul>

        <hr />

        <h2>🧱 Tech Stack</h2>
        <p>
          <strong>Frontend:</strong> React, React Router v6, Context API, Fetch
          API
          <br />
          <strong>Backend:</strong> Node.js, Express.js, MongoDB, Mongoose, JWT,
          bcrypt
          <br />
          <strong>Dev:</strong> Postman, Git/GitHub, npm, CORS
        </p>
      </div>
    </>
  );
};

export default About;
