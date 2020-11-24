const db = require("./models");
const data = require("./storeData.json");

db.Store.deleteMany({}, (err, deletedStores) => {
  db.Store.create(data.stores, (err, seededStore) => {
    if (err) return console.log(err);
    console.log(data.stores.length, " stores successfully created");

    process.exit();
  });
});
