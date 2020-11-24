const router = require("express").Router();
const ctrl = require("../controllers/storeCtrl");

router.get("/", ctrl.stores.index);
router.get("/:storeId", ctrl.stores.show);
router.post("/", ctrl.stores.create);
router.put("/:storeId", ctrl.stores.update);
router.delete("/:storeId", ctrl.stores.destroy);

module.exports = router;
