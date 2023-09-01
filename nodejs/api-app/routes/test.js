/*
C => POST
R => GET
U => PUT
D => DELETE
*/

const router = require("express").Router();
//Get : /test/:id
// :param : required data
//:param? : optional data
//?page=1&order=asc
router.get("/:id?", (req, res) => {
  return res
    .status(201)
    .json({ pathParams: req.params, queryParams: req.query });
});

//Post : /test

router.post("/", (req, res) => {
  return res.json({ body: req.body });
});

module.exports = router;
