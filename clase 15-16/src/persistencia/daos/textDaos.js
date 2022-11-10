import { MongoClass } from "../contenedor/Mongoclass.js";
import {textModel} from "../models/modelText.js";

class TextMongoDAO extends MongoClass { 
    constructor() {
        super(textModel)
    }
}

export default TextMongoDAO;