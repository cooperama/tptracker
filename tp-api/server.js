const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const PORT = process.env.PORT || 4000;
const app = express();

const corsOptions = { origin: "http://localhost:3000" };

// -------------------------- MIDDLEWARE
app.use(express.json());
app.use(cors(corsOptions));

// -------------------------- MIDDLEWARE API
app.use("/api/v1/products", routes.products);
app.use("/api/v1/stores", routes.stores);

// -------------------------- CONNECTION
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
