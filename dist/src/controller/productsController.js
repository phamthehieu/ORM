"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
class ProductsController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let product = await this.productService.getAll();
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.addProduct = async (req, res) => {
            try {
                let category = await this.categoryService.findAll();
                let product = await this.productService.createProduct(req.body);
                res.status(200).json(category);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.editProduct = async (req, res) => {
            try {
                let id = req.params.id;
                let product = await this.productService.updateProduct(id, req.body);
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.deleteProduct = async (req, res) => {
            try {
                let id = req.params.id;
                let product = await this.productService.deleteProduct(id);
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findById = async (req, res) => {
            try {
                let id = req.params.id;
                let product = await this.productService.findById(id);
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.productService = productService_1.default;
        this.categoryService = categoryService_1.default;
    }
}
exports.default = new ProductsController();
//# sourceMappingURL=productsController.js.map