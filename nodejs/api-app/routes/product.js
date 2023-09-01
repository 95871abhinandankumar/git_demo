const router = require("express").Router();
const product = require("../models/product");
const repo = require("../repos/product");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("image"), function (req, res) {
  try {
    return res.status(200).json({ file: req.file, body: req.body });
  } catch (e) {
    return res.status(400).json(e);
  }
});

//POST: /product

router.post("/", async (req, res) => {
  try {
    await repo.addPrduct(req.body);
    return res.status(201).send();
  } catch (e) {
    return res.status(400).json(e);
  }
});

router.get("/:id?", async (req, res) => {
  try {
    let data;
    if (req.params.id) {
      data = await repo.getProductById(req.params.id);
    } else {
      data = await repo.getAllProducts(req.params.id);
    }
    return res.json(data);
  } catch (e) {
    return res.status(400).json(e);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await repo.updateProduct(req.params.id, req.body);
    return res.status(200).send();
  } catch (e) {
    return res.status(400).json(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await repo.removeProduct(req.params.id);
    return res.status(200).send();
  } catch (e) {
    return res.status(400).json(e);
  }
});

router;
module.exports = router;
