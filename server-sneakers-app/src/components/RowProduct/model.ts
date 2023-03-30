import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';
import * as connections from '../../config/connection/connection';
import { IOrderModel } from '../Order/model';
import { IProductModel } from '../Product/model';
/**
 * @export
 * @interface IRowProductModel
 * @extends {Document}
 */
export interface IRowProductModel extends Document {
    order_id: string;
    product_id: string;
    quantity: number;
    rowPrice: number;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    RowProductSchema:
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
 *    RowProducts:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/RowProductSchema'
 */
const RowProductSchema: Schema = new Schema({
    order_id: {
        type: Schema.Types.ObjectId,
        ref: "Order",
        default: null
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        default: null
    },
    quantity: {
        type: Number,
        default: 1
    },
    rowPrice: {
        type: Number
    }
}, {
    collection: 'rowproductmodel',
    versionKey: false,
}).pre('save', async function (next: NextFunction): Promise < void > {
    const rowproduct: IRowProductModel = this; // tslint:disable-line
    if (!rowproduct) {
        return next();
    }
});

export default connections.db.model< IRowProductModel >('RowProductModel', RowProductSchema);
