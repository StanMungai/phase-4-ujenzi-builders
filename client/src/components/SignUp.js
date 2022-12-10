import React, { useState } from "react";

function SignUp({ setContractor }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((contractor) => setContractor(contractor));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text">Sign Up</h1>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password" className="text">Password Confirmation</label>
        <input
          className="inputs"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit" className="btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
