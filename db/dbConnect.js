import mongoose from "mongoose";

export const dbConnect = (url) => {
  return mongoose.connect(url);
};

