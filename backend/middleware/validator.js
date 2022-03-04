const { check, validationResult } = require("express-validator");

const exceptedCategory = ["entertainment", "political", "tech"];

const validator = [
  check("title").trim().not().isEmpty().withMessage("Title is required"),
  check("content")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Must have some content!"),
  check("category").isIn(exceptedCategory).withMessage("Title is required"),
];

const validateFile = (req, res, next) => {
  const exceptedFileType = ["png", "jpg", "jpeg"];

  if (!req.file) {
    res.json({ success: false, message: "Image is required" });
  }

  const fileExtension = req.file.mimetype.split('/').pop();
  if(!exceptedFileType.includes(fileExtension)){
    res.json({ success: false, message: "Image is required" });
  }

  next();
};

module.exports = {
  validator,
  result,
  validateFile,
};
