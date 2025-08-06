require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/user");
const contactRoutes = require("./routes/contact");
const postRoutes = require("./routes/post");
const uploadRoutes = require("./routes/upload");

const allowedOrigins = [
  "http://localhost:5173",
  "https://abc-company1216.netlify.app",
  process.env.FRONTEND_URL,
];

app.use(
  cors({
    origin: (origin, callback) => {
      // 개발 서버 요청일 경우 허용
      if (!origin || allowedOrigins.filter(Boolean).includes(origin)) {
        callback(null, true);
      } else {
        console.log("CORS 차단된 출처:", origin);
        console.log("허용된 출처들:", allowedOrigins.filter(Boolean));
        callback(new Error("CORS 차단: 허용되지 않은 출처"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/auth", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/post", postRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB와 연결이 되었습니다."))
  .catch((error) => console.log("MongoDB와 연결에 실패했습니다: ", error));

app.listen(PORT, () => {
  console.log("Server is running");
});
