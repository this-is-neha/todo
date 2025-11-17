const express = require('express');
const cors = require('cors');

const helmet = require("helmet");


require("./db.config");
const mainRoute = require("./routing.config");

const app = express();

app.use(
  cors({
    origin: ["https://goalggridd.netlify.app","http://localhost:5173"],
    credentials: true,
  })
);

app.options('*', cors())
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(mainRoute);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

console.log("Express server is running");
module.exports = app;
