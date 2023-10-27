const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3000;
const indexRouter = require("./routes/index");
const cookieParser = require("cookie-parser");
const movieRouter = require("./routes/movieRouter");
const ticketRouter = require("./routes/ticketRouter");

const app = express();
const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/", indexRouter);
app.use("/movies", movieRouter);
app.use("/tickets", ticketRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
