import express from "express";
import "dotenv/config";
import { dbConnect } from "./db/dbConnect.js";
import { ErrorHandler, NotFound } from "./middleware.js";
import productRouter from "./routes/productsRouter.js";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Store-API</h1>");
});
//Routes
app.use("/api/v1/products", productRouter);

// middleware
app.use(NotFound);
app.use(ErrorHandler);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await dbConnect(process.env.MONGO_URI);
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

start();
