const db = require("../models");

const index = (req, res) => {
  db.Store.find({})
    .then((foundStore) => {
      res.json({ stores: foundStore });
    })
    .catch((err) => {
      console.log("Error in Stores.index: ", err);
      res.json({ err: "Unable to get your data" });
    });
};

const show = (req, res) => {
  db.Store.findById(req.params.id)
    .then((foundStore) => {
      res.json({ store: foundStore });
    })
    .catch((err) => {
      console.log("Error in Stores.show: ", err);
      res.json({ err: "Unable to get your data" });
    });
};

const create = (req, res) => {
  db.Store.create(req.body)
    .then((savedStore) => {
      res.json({ store: savedStore });
    })
    .catch((err) => {
      console.log("Error in Stores.create: ", err);
      res.json({ err: "Unable to get your data" });
    });
};

const update = (req, res) => {
  db.Store.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedStore) => {
      res.json({ store: updatedStore });
    })
    .catch((err) => {
      console.log("Error in Stores.update: ".err);
      res.json({ err: "Unable to get your data" });
    });
};

const destroy = (req, res) => {
  db.Store.findByIdAndDelete(req.params.id)
    .then((deletedStore) => {
      res.json({ store: deletedStore });
    })
    .catch((err) => {
      console.log("Error in Stores.destroy: ", err);
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
