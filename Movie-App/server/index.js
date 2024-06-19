const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

mongoose.connect(
  "mongodb+srv://alihassan478:03176113413Ali@cluster0.cvsxxzo.mongodb.net/"
);

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
