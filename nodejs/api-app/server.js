//For formatting we need this library
require("dotenv").config();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { rateLimit } = require("express-rate-limit");
//For parsing
const express = require("express");
const authMiddleware = require("./middlewares/auth");

const app = express();
const PORT_NUMBER = argv.port || 3000;
const testRouter = require("./routes/test");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: "draft-7", // draft-6: RateLimit-* headers; draft-7: combined RateLimit header
  legacyHeaders: false, // X-RateLimit-* headers
});

//Databse
const db = require("./db");

//For security
const helmet = require("helmet");

//For logger
const morgan = require("morgan");

app.use(limiter);

console.log(process.argv, argv);

//To work with .env file we need dotenv library
console.log(process.env.PASSWORD);

app.use(helmet());
app.use(authMiddleware);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", userRouter);

app.use("/test", testRouter);
app.use("/product", productRouter);

app.listen(PORT_NUMBER, (err) => {
  console.log("Attempting to start the server");
  if (err) {
    console.log("Failed to start the server");
    return process.exit(1);
  }
  console.log(`starting server on http://localhost:${PORT_NUMBER}`);
  db().catch((e) => console.log("Failed to connect to db :", e));
});
