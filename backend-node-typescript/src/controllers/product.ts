import { Request, Response } from "express";
import Seneca from "seneca";

const seneca = Seneca();

export const addProduct = (req: Request, res: Response) => {
  let args = req.body;
  console.log(req.body)
  // prettier-ignore
  seneca.client().act("role:database,cmd:addproduct", args, (error, response) => {
      if (error) return res.send(error);
      res.send(response);
    });
};

export const getAllProducts = async (req: Request, res: Response) => {
  seneca.client().act("role:database,cmd:allproducts", (error, response) => {
    if (error) return res.send(error);
    res.send(response);
  });
};
