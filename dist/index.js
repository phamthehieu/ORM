"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("./src/data-soure");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const productRouter_1 = require("./src/router/productRouter");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
data_soure_1.AppDataSource.initialize().then(() => {
    console.log("Bo Hieu Muon Nam");
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('./public'));
app.use('', productRouter_1.router);
app.listen(3000, () => {
    console.log('Bo hieu muon nam');
});
//# sourceMappingURL=index.js.map