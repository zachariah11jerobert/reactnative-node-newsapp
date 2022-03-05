const express = require("express");
const router = express.Router();
const multer = require("multer");
const News = require("../news/news");
const imageProcess = require("../util/ImageProcess");

const storage = multer.memoryStorage();
const uploads = multer({ storage });

const result = (req, res, next) => {
  const result = validationResult(req);
  const hasError = !result.isEmpty();

  if (hasError) {
    const error = result.array()[0].msg;
    res.json({ success: false, message: error });
  }

  next();
};

router.post("/create", uploads.single("thumbnail"), async (req, res) => {
  // console.log("file", req.file);
  // console.log("body", req.body);

  const news = new News();
  const id = news.createId();
  const imageName = await imageProcess(req, id);
  news.create(req.body, id, imageName);
  res.send("submit successful !!!");
});

router.get("/news", getAllNews);
router.get("/news/single/:id", getSingleNews);
router.get("/news/:category", getNewsByCategory);

module.exports = router;
