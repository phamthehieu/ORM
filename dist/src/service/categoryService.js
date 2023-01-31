"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../model/category");
const data_soure_1 = require("../data-soure");
class CategoryService {
    constructor() {
        this.findAll = async () => {
            let category = await this.categoryRepository.find();
            return category;
        };
        this.categoryRepository = data_soure_1.AppDataSource.getRepository(category_1.Category);
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=categoryService.js.map