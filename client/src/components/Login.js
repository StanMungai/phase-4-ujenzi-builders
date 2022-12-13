import React, { useState } from "react";

function Login({ setContractor }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((contractor) => setContractor(contractor));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text">Login</h1>
        <label htmlFor="name" className="text">Name</label>
        <input
          className="inputs"
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password" className="text">Password</label>
        <input
          className="inputs"  
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
