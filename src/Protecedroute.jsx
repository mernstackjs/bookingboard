import React, { useState, useEffect } from "react";
import axios from "axios";

const ProtectedRoute = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3003/protected")
      .then((response) => {
        console.log(response);
        setMessage(response.data.message);
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data);
        } else {
          setError("An error occurred while accessing the protected route.");
        }
      });
  }, []);

  return (
    <div>
      <h2>Protected Route</h2>
      {message && <p>{message}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ProtectedRoute;
