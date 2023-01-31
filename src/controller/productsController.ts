import {Request, Response} from "express";
import productService from "../service/productService";
import categoryService from "../service/categoryService";
class ProductsController {
    private productService
    private categoryService
    constructor() {
        this.productService = productService
        this.categoryService = categoryService
    }
    getAll = async (req: Request, res: Response) => {
        try {
            let product = await this.productService.getAll()
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    addProduct = async (req: Request, res: Response) => {
        try {

            let product = await this.productService.createProduct(req.body)
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    editProduct = async (req: Request, res: Response) => {
        try {
            let id = req.params.id
            let product = await this.productService.updateProduct(id, req.body)
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    deleteProduct = async (req: Request, res: Response) => {
        try {
            let id = req.params.id
            let product = await this.productService.deleteProduct(id)
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    findById = async (req: Request, res: Response) => {
        try {
            let id = req.params.id
            let product = await this.productService.findById(id)
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    showCategory = async (req: Request, res: Response) => {
        try {
            let category = await this.categoryService.findAll()
            res.status(200).json(category)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    searchProduct = async (req: Request, res: Response) => {
        try {
            let products = await this.productService.searchProduct(req.query.name)
            res.status(200).json(products)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}
export default new ProductsController()