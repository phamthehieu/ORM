import {Category} from "../model/category";
import {AppDataSource} from "../data-soure";
class CategoryService {
    private categoryRepository
    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category)
    }
    findAll = async () => {
        let category = await this.categoryRepository.find()
        return category;
    }
}

export default new CategoryService()