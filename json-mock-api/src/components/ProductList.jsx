import React, { useEffect, useState } from "react";
import "./ProductList.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [url]);

  const handleFilterChange = (event) => {
    const filter = event.target.value;
    setUrl(filter);
  };

  return (
    <div className="product-list-container">
      {/* Filter dropdown on top */}
      <div className="filter-dropdown">
        <label htmlFor="product-filter">Filter Products: </label>
        <select id="product-filter" onChange={handleFilterChange}>
          <option value="http://localhost:8000/products">All</option>
          <option value="http://localhost:8000/products?in_stock=true">
            In Stock
          </option>
        </select>
      </div>

      {/* Product list */}
      <section>
        {products.map((product) => (
          <div key={product.id}>
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>
              <span>Price: ${product.price}</span>
              <span className={product.in_stock ? "instock" : "unavailable"}>
                {product.in_stock ? "In Stock" : "Unavailable"}
              </span>
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
