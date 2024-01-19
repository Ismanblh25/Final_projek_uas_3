const express = require('express');
const app = express();
const router = require("./routes/api");

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(router);

app.listen(3000, () => {
 console.log("Server running at: http://localhost:3000")
});