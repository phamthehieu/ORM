import {Router} from "express";
import productsController from "../controller/productsController";
export const router = Router();
router.get("/category", productsController.showCategory)
router.get("/products", productsController.getAll)
router.post("/products", productsController.addProduct)
router.put("/products/:id", productsController.editProduct)
router.delete("/products/:id", productsController.deleteProduct)
router.get("/products/:id", productsController.findById)