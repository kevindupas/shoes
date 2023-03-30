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
 *    OrderSchema:
 *      required:
 *        - email
 *        - name
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        password:
 *          type: string
 *        passwordResetToken:
 *          type: string
 *        passwordResetExpires:
 *          type: string
 *          format: date
 *        tokens:
 *          type: array
 *    Orders:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/OrderSchema'
 */
const OrderSchema = new mongoose_1.Schema({
    products: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Product",
            default: null
        }],
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    ref_order: {
        type: String,
        default: "XXX"
    }
}, {
    collection: 'ordermodel',
    versionKey: false,
}).pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const order = this; // tslint:disable-line
        if (!order) {
            return next();
        }
    });
});
exports.default = connections.db.model('OrderModel', OrderSchema);
//# sourceMappingURL=model.js.map