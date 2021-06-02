import mongoose from "mongoose";
require("dotenv").config();

const MONGOURI: string = process.env.DATABASE_URL || "";

const IntiateServer = async () => {
  try {
    await mongoose.connect(
      MONGOURI,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("connected to database");
      }
    );
  } catch (e) {
    console.log("--error conneting database---->", e);
    throw e;
  }
};
IntiateServer();

export { mongoose };
