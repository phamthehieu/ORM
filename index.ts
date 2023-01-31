
import {AppDataSource} from "./src/data-soure";
import express from 'express';
import bodyParser from "body-parser";
import {router} from "./src/router/productRouter"
import cors from "cors"

const app = express();
AppDataSource.initialize().then(() => {
    console.log("Bo Hieu Muon Nam")
})
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use('',router);
app.listen(3000, () => {
    console.log('Bo hieu muon nam')
})