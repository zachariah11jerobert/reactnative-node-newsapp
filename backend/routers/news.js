const express = require("express");
const router = express.Router();
const sharp = require("sharp");
const multer = require("multer");
const News = require("../news/news");

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
  console.log("file", req.file);
  console.log("body", req.body);
  fs.access("./data/uploads", (err) => {
    if (err) {
      fs.mkdirSync("./data/uploads");
    }
  });
  const id = new News().createId();
  const formatedName = req.file.originalname.split(" ").join("-");
  const fileName = `${id}-${formatedName}`;
  await sharp(req.file.buffer)
    .resize({ width: 615, height: 350 })
    .toFile("./data/uploads/" + req.file.originalname);
  res.send("submit successful !!!");
});

router.get("/news", getAllNews);
router.get("/news/single/:id", getSingleNews);
router.get("/news/:category", getNewsByCategory);

module.exports = router;
