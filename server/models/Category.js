// 몽구스 변수에 할당
const mongoose = require("mongoose");

// 유저 스키마 생성
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
