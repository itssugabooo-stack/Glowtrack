import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import "../pages/Dashboard.css";

const categories = [
  "All Products",
  "Cleansers",
  "Toners",
  "Serums",
  "Moisturizers",
  "Sunscreen",
  "Treatments",
  "Masks",
];

const Products = () => {
  const [active, setActive] = useState("All Products");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const filtered =
    active === "All Products"
      ? products
      : products.filter((p) => p.category_name === active);

  return (
    <div className="productsPage">
      <nav className="dashNav">
        <div className="dashBrand">
          <div className="dashLogo">✦</div>
          <span>GlowTrack</span>
        </div>

        <div className="dashLinks">
          <button onClick={() => navigate("/dashboard")}>▦ Dashboard</button>
          <button className="active">✦ Products</button>
          <button onClick={() => navigate("/progress")}>＋ Log Progress</button>
          <button onClick={() => navigate("/analysis")}>↗ Analysis</button>
          <button onClick={() => navigate("/profile")}>♙ Profile</button>
        </div>
      </nav>

      <main className="productsMain">
        <h1>Product Recommendations</h1>

        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={active === cat ? "active" : ""}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="productGrid">
          {filtered.map((p) => (
            <div className="productCard" key={p.product_id}>
              <img src={p.image_url} alt={p.product_name} />
              <p>{p.product_name}</p>
              <small>{p.category_name}</small>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;