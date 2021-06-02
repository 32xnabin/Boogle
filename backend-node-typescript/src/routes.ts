import { Router } from "express";
import { addProduct, getAllProducts } from "./controllers/product";

const router = Router();

router.post("/api/product/add", addProduct);
router.get("/api/product/all", getAllProducts);

export { router as proudctRouter };
