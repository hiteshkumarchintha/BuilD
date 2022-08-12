const express = require("express");
const app = express();
var cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");
const mentorRoute = require("./routes/mentors");
const adminRoute = require("./routes/admins");

const userAuthRoute = require("./routes/userAuth");
const mentorAuthRoute = require("./routes/mentorAuth");
const adminAuthRoute = require("./routes/adminAuth");

const requestRoute = require("./routes/requests");

const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
dotenv.config();
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(cors());
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/request", requestRoute);

app.use("/api/userAuth", userAuthRoute);
app.use("/api/mentorAuth", mentorAuthRoute);
app.use("/api/adminAuth", adminAuthRoute);

app.use("/api/users", userRoute);
app.use("/api/mentors", mentorRoute);
app.use("/api/admins", adminRoute);

app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
