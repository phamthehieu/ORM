"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const productsController_1 = __importDefault(require("../controller/productsController"));
exports.router = (0, express_1.Router)();
exports.router.get("/category", productsController_1.default.showCategory);
exports.router.get("/products", productsController_1.default.getAll);
exports.router.post("/products", productsController_1.default.addProduct);
exports.router.put("/products/:id", productsController_1.default.editProduct);
exports.router.delete("/products/:id", productsController_1.default.deleteProduct);
exports.router.get("/products/:id", productsController_1.default.findById);
exports.router.get("/find-by-name", productsController_1.default.searchProduct);
//# sourceMappingURL=productRouter.js.map