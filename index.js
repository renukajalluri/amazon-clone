const express = require("express");
const PORT = 3000;
const app = express();
const authRouter = require("./routes/auth");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
const productRouter = require('./routes/product')
const userRouter = require("./routes/user");

const DB =
  "mongodb+srv://amazon:amazon@cluster0.kvciepq.mongodb.net/amazon?retryWrites=true&w=majority";

app.use(express.json());
app.use("/api", authRouter);
app.use(adminRouter);
app.use(userRouter);

app.use(productRouter);

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
