/*-------------------------EXPRESS-------------- */
/* Conexión y configuración de express */
const express = require("express"); //importo el modulo de express
const cors = require("cors"); //importo el modulo de cors
const app = express(); // lo ejecutamos y guardamos en una variable (guardamos una INSTANCIA de express)
const port = 3000; // constante del puerto que levantare en el servidor
/* ------MIDDLEWARES (configuraciones express)---------------------------------------------------------- */
app.use(express.json()); /*--Para aceptar json(body) en mis peticiones http-- */
app.use(cors()); /* Para aceptar peticiones del front o postman*/

/* Vinculo mis modelos para usar rutas */
const { User,Product } = require("./db");

/* RUTAS */
app.get("/users", async (req, res) => {
  const allUsers = await User.findAll(); //todos los usuarios
  res.status(200).json(allUsers);
});

app.get("/products", async (req, res) => {
  const allProducts = await Product.findAll(); //todos los usuarios
  res.status(200).json(allProducts);
});

app.post("/users", async (req, res) => {
  const newUser = await User.create({ firstName: "Nestor", lastName: "Aguas" }); //creo un usuario
  res.status(200).json("usuario creado con exito");
});
app.post("/products", async (req, res) => {
  const newProduct = await Product.create({ title: "Cerveza", price: "$50" }); //creo un producto
  res.status(200).json("producto creado con exito");
});

app.get("/", (req, res) => {
  res.send(
    "Hello World!, Ruta inicial de ejemplo, Bienvenido a la api de marketplace de protalento"
  );
});

module.exports = { app, port };
