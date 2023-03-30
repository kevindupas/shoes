"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connections = require("../../config/connection/connection");
/**
 * @swagger
 * components:
 *  schemas:
 *    CategorieProductSchema:
 *      required:
 *        - label
 *      properties:
 *        id:
 *          type: string
 *        label:
 *          type: string
 *
 *    CategorieProducts:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/CategorieProductSchema'
 */
const CategorieProductSchema = new mongoose_1.Schema({
    label: {
        type: String,
        unique: true,
        required: true
    }
}, {
    collection: 'categorieproductmodel',
    versionKey: false,
}).pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const categorieProduct = this; // tslint:disable-line
        if (!categorieProduct) {
            return next();
        }
    });
});
exports.default = connections.db.model('categorieProductModel', CategorieProductSchema);
//# sourceMappingURL=model.js.map