import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { auth, firebaseApp } from "./firebase/firebaseClient";
import FBActions from "./FBActions";

function App() {
  return (
    <div className="App">
      <FBActions />{" "}
    </div>
  );
}

export default App;
