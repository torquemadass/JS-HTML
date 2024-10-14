import express from "express";
import { bookController } from "../controllers/books.controller.js";
import { productController } from "../controllers/weekendproduct.controller.js";
import { orderController } from "../controllers/orders.controller.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("JavaScript Developer Class");
})

router.get("/books", bookController.getBooks);
router.get("/books/:id", bookController.findBook);

// router.post("/books", bookController.addBook);
// router.delete("/books/:id", bookController.removeBook);

// Product routes
router.post("/products", productController.addProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);
router.get("/products", productController.getProducts);

// User products route
router.get("/users/:id/products", orderController.getUserProducts);

// Order route
router.post("/users/:id/orders", orderController.addOrder);



export default router;