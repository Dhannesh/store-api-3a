import product from "../models/product.js";

export const getAllProducts = async (req, res) => {
  try {
    const queryLink = {};
    const { name, featured, company } = req.query;
    //it will works as like option in sql
    if (name) queryLink.name = name;

    if (company) queryLink.company = { $regex: company, $options: "i" };

    if (featured) queryLink.featured = featured === "true" ? true : false;

    const products = await product.find(queryLink).sort("price");
    res.status(200).json({ nbHits: products.length, products });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "Data not found" });
  }
};

export const getAllProductsStatic = async (req, res) => {
  const products = await product.find().sort("-name price");
  res.status(200).json({ nbHits: products.length, products });
};
