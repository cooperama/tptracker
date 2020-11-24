const db = require("./models");
const data = require("./productData.json");

db.Product.deleteMany({}, (err, deletedProducts) => {
  db.Product.create(data.products, (err, seededProducts) => {
    if (err) return console.log(err);
    console.log(data.products.length, " products successfully created");

    process.exit();
  });
});
