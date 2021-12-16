import express from "express";
const router = express.Router();

import multer from "multer";
const upload = multer({ dest: "uploads/" });

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "File Upload Project" });
});

router.post("/", upload.single("userfile"), (req, res) => {
  res.send("Uploaded! : " + req.file);
  console.log(req.file);
});

export default router;
