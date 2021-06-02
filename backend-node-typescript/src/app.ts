import express from "express";
import  cors from 'cors';

import { proudctRouter } from "./routes";

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(proudctRouter);


app.listen(process.env.PORT||5000, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});

export default app;
