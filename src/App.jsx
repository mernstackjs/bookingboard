import React from "react";
import Register from "./Register";
import Login from "./Login";
import axios from "axios";
import ProtectedRoute from "./Protecedroute";
export default function App() {
  const fetchUser = async () => {
    const res = await axios.get("http://localhost:3003/users");
  };
  fetchUser();
  return (
    <div>
      <h1>users is here</h1>
      <Register />
      <Login />
      <ProtectedRoute />
    </div>
  );
}
