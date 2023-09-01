//For formatting we need this library
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

//For parsing
const express = require("express");

const app = express();
const PORT_NUMBER = argv.port || 3000;
const testRouter = require("./routes/test");

//For security
const helmet = require("helmet");

//For logger
const morgan = require("morgan");
require("dotenv").config();

console.log(process.argv, argv);

//To work with .env file we need dotenv library
console.log(process.env.PASSWORD);

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/test", testRouter);

app.listen(PORT_NUMBER, (err) => {
  console.log("Attempting to start the server");
  if (err) {
    console.log("Failed to start the server");
    return process.exit(1);
  }
  console.log(`starting server on http://localhost:${PORT_NUMBER}`);
});
