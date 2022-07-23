import React, { useState } from "react";

import { useContext } from "react";
import { UserContext } from "../../App";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, handeGooglelSignIn, handelSignOut, initializeLoginFramework, signInWithEmailAndPassword } from "./LoginManager";



const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    // error: "",
    // success: false,
    // newUser: false
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const navigate = useNavigate()
  // const location = useLocation()
  // let {from} = location.state ||  <Navigate to ="/" replace state = {{from: location}}/>;
  const googlelSignIn = () => {
    handeGooglelSignIn()
    .then(res => {
      handelResponse(res, true);
    })
  }
  const signOut = () => {
    handelSignOut()
    .then(res => {
      handelResponse(res, false);
      })
  }
  const handelResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
      navigate(-2);
    }
  }

  const handelBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handelSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword( user.name, newUser.email, newUser.password)
      .then(res => {
        handelResponse(res, true);
      })
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handelResponse(res, true);
      })
    }
    e.preventDefault();
  };

  

  return (
    <div className="App">
      {user.isSignedIn ? (
        <button onClick={signOut}> Google Sign Out </button>
      ) : (
        <button onClick={googlelSignIn}> Google Sign in </button>
      )}
      {user.isSignedIn && (
        <div>
          <p>Welcome, {user.name}</p>
          <p>email: {user.email}</p>
        </div>
      )}

      <h2>😉</h2>
      <input
        type="checkbox"
        onChange={() => setNewUser(!newUser)}
        name="newUser"
        id=""
      />
      <label htmlFor="newUser">New User</label>
      <form onSubmit={handelSubmit}>
        {newUser && (
          <input
            type="text"
            onBlur={handelBlur}
            name="name"
            placeholder="name"
            required
          />
        )}
        <br />
        <input
          type="text"
          onBlur={handelBlur}
          name="email"
          placeholder="email"
          required
        />
        <br />
        <input
          type="password"
          onBlur={handelBlur}
          name="password"
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
      </form>
      {user.success && (
        <p style={{ color: "green" }}>
          User {newUser ? "Created" : "Logged In"} Successfully
        </p>
      )}
      <p style={{ color: "red" }}>{user.error}</p>
    </div>
  );
};

export default Login;
