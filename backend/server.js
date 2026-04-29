const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "skincare_db"
});

// REGISTER
app.post("/register", async (req, res) => {
  const { full_name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)",
    [full_name, email, hashedPassword],
    (err) => {
      if (err) return res.send(err);
      res.send("User registered");
    }
  );
});

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) return res.send(err);
      if (result.length === 0) return res.send("User not found");

      const user = result[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) return res.send("Wrong password");

      res.json({ message: "Login success", user });
    }
  );
});
// GET all products
app.get("/products", (req, res) => {
  db.query(
    `SELECT products.*, categories.category_name 
     FROM products 
     LEFT JOIN categories 
     ON products.category_id = categories.category_id`,
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});