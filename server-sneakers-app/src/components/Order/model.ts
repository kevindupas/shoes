import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';
import * as connections from '../../config/connection/connection';
import { IProductModel } from '../Product/model';
import { IUserModel } from '../User/model';
/**
 * @export
 * @interface IOrderModel
 * @extends {Document}
 */
export interface IOrderModel extends Document {
    products: IProductModel[];
    owner: IUserModel;
    ref_order: string;
}

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
const OrderSchema: Schema = new Schema({
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product",
        default: null
    }],
    owner: {
        type: Schema.Types.ObjectId,
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
}).pre('save', async function (next: NextFunction): Promise < void > {
    const order: IOrderModel = this; // tslint:disable-line

    if (!order) {
        return next();
    }
});

export default connections.db.model< IOrderModel >('OrderModel', OrderSchema);
