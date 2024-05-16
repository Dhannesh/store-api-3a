import "dotenv/config";
import { dbConnect } from "./db/dbConnect.js";
import product from "./models/product.js";
import jsonProducts from "./products.json" assert { type: "json" };

const insertProducts = async () => {
  try {
    await dbConnect(process.env.MONGO_URI);
    await product.deleteMany();
    await product.create(jsonProducts);
    console.log("products exported successfully");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

insertProducts();
