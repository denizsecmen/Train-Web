import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./components/item";
export default function Menu() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:9001/getitem')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err.message || "An error occurred");
      });
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (data.length === 0) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {data.map((item: any) => {
        console.log(item.image);
            const image = new Blob([item.image]);
            const imageUrl = URL.createObjectURL(image);
            return (
         <Item
      image={imageUrl}
      name={item.name}
      amount={item.amount}
      price={item.price}
    />
  );
})}
    </div>
  );
}
