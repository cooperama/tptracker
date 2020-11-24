const db = require("../models");

const index = (req, res) => {
  db.Product.find({})
    .then((foundProduct) => {
      res.json({ products: foundProduct });
    })
    .catch((err) => {
      console.log("Error in products.index: ", err);
      res.json({ err: "Unable to get your data" });
    });
};

const show = (req, res) => {
  db.Product.findById(req.params.id)
    .then((foundProduct) => {
      res.json({ product: foundProduct });
    })
    .catch((err) => {
      console.log("Error in products.show: ", err);
      res.json({ err: "Unable to get your data" });
    });
};

const create = (req, res) => {
  db.Product.create(req.body)
    .then((savedProduct) => {
      res.json({ product: savedProduct });
    })
    .catch((err) => {
      console.log("Error in products.create: ", err);
      res.json({ err: "Unable to get your data" });
    });
};

const update = (req, res) => {
  db.Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedProduct) => {
      res.json({ product: updatedProduct });
    })
    .catch((err) => {
      console.log("Error in products.update: ".err);
      res.json({ err: "Unable to get your data" });
    });
};

const destroy = (req, res) => {
  db.Product.findByIdAndDelete(req.params.id)
    .then((deletedProduct) => {
      res.json({ product: deletedProduct });
    })
    .catch((err) => {
      console.log("Error in products.destroy: ", err);
      res.json({ err: "Unable to get your data" });
    });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
