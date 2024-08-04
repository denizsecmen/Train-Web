import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Menu() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9001/getitem')
      .then(response => {
        console.log(response);
        setData(response.data[0]);
      })
      .catch(err => {
        setError(err.message || "An error occurred");
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data === null) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}
