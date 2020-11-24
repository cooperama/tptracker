const router = require("express").Router();
const ctrl = require("../controllers");
// const ctrl = require("../controllers/productCtrl");

router.get("/", ctrl.products.index);
router.get("/:productId", ctrl.products.show);
router.post("/", ctrl.products.create);
router.put("/:productId", ctrl.products.update);
router.delete("/:productId", ctrl.products.destroy);

module.exports = router;
