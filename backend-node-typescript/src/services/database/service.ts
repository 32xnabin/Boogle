import Seneca from "seneca";
import { Database } from "./database";

const seneca = Seneca();
const HOST = "localhost";
const PORT = "10101";
const database = new Database();

seneca
  .use(database.getAllProducts, {
    auto: true,
    host: HOST,
    port: PORT,
    pin: "role:database,cmd:allproducts",
  })
  .use(database.addProduct, {
    auto: true,
    host: HOST,
    port: PORT,
    pin: "role:database,cmd:addproduct",
  })
  .listen({
    type: "http",
    host: HOST,
    port: PORT,
  })
  .ready(() => {
    console.log(
      `add proudct and ge all prouduct  services ready!!! IP: ${HOST}`
    );
  });
