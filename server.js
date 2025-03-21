const express = require("express");
const app = express();
const userRoutes = require("./Routes/users");
require("dotenv").config();
const PORT = process.env.PORT;

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/home", (req, res) => {
  res.send("Well Come to home Page");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
