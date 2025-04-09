import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const { theme } = useContext(ThemeContext);
  console.log(theme);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json(); // convert json to object
        setProducts(data.products);
      } catch (error) {
        console.log("Error fetching data");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Product List</h1>

      {products.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
