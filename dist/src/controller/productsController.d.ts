import { Request, Response } from "express";
declare class ProductsController {
    private productService;
    private categoryService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    addProduct: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
    showCategory: (req: Request, res: Response) => Promise<void>;
    searchProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductsController;
export default _default;
