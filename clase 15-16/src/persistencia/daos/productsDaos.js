import { MongoClass } from "../contenedor/Mongoclass.js";
import {productsModel} from "../models/modelProduct.js";

class ProductsMongoDAO extends MongoClass { 
    constructor() {
        super(productsModel)
    }

}

export default ProductsMongoDAO;