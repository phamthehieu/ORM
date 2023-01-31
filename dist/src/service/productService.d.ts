declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    createProduct: (product: any) => Promise<any>;
    updateProduct: (id: any, products: any) => Promise<any>;
    deleteProduct: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
