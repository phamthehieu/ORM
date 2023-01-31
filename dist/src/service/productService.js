"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
const data_soure_1 = require("../data-soure");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let sql = `SELECT p.id, p.name, p.price, p.image, c.nameCategory from product p JOIN category c on p.category = c.id`;
            let products = await this.productRepository.query(sql);
            return products;
        };
        this.createProduct = async (product) => {
            return await this.productRepository.save(product);
        };
        this.updateProduct = async (id, products) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            else {
                return await this.productRepository.update({ id: id }, products);
            }
        };
        this.deleteProduct = async (id) => {
            return await this.productRepository.delete({ id: id });
        };
        this.findById = async (id) => {
            let sql = `SELECT p.id, p.name, p.price, p.image, c.nameCategory from product p JOIN category c on p.category = c.id where p.id = ${id}`;
            let product = await this.productRepository.query(sql);
            return product;
        };
        this.searchProduct = async (value) => {
            let sql = `SELECT p.id, p.name, p.price, p.image, c.nameCategory from product p JOIN category c on p.category = c.id where p.name LIKE "%${value}%"`;
            let products = await this.productRepository.query(sql);
            if (!products) {
                return null;
            }
            return products;
        };
        this.productRepository = data_soure_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map