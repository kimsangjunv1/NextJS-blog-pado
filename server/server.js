const express = require("express");
const app = express();
const port = 5001;
const mongoose = require("mongoose");

// url, 키값, 함수 외부노출 방지
const dotenv = require("dotenv");

dotenv.config();

console.log("요호");

// 몽고DB 연결
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("몽고DB연결됨"))
  .catch((err) => console.log(err));

// 사용자가 들어오면 보내줄것
app.get("/", (req, res) => {
  res.send("워후!");
});

// 내가 듣고있을것
app.listen(port, () => {
  console.log("success!");
});

// 미들웨어를 불러올때 사용하며 라우터 함수를 불러오는데 쓰일 예정
app.use("/gogo", () => {
  console.log("gogo url");
});
