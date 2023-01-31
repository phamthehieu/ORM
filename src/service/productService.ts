import {Product} from "../model/product"
import {AppDataSource} from "../data-soure";

class ProductService {
    private productRepository
    constructor() {
        this.productRepository = AppDataSource.getRepository(Product)
    }
    getAll = async () => {
        let sql =`SELECT p.id, p.name, p.price, p.image, c.nameCategory from product p JOIN category c on p.category = c.id`
        let products = await this.productRepository.query(sql)
        return products;
    }
    createProduct = async (product) => {
       return await this.productRepository.save(product)
    }
    updateProduct = async (id, products) => {
        let product = await this.productRepository.findOneBy({id: id})
        if (!product) {
            return null
        } else {
            return await this.productRepository.update({id: id},products)
        }
    }
    deleteProduct = async (id) => {
        return await this.productRepository.delete({id: id})
    }
    findById = async (id) => {
        let sql =`SELECT p.id, p.name, p.price, p.image, c.nameCategory from product p JOIN category c on p.category = c.id where p.id = ${id}`
        let product = await this.productRepository.query(sql)
        return product;
    }
}
export default new ProductService()