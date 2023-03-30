import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';
import * as connections from '../../config/connection/connection';

/**
 * @export
 * @interface ICategorieProductModel
 * @extends {Document}
 */

export interface ICategorieProductModel extends Document {
  label: {
    type:String,
    require: true,
    unique: true
  }
}

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
const CategorieProductSchema: Schema = new Schema({
    label: {
      type: String,
      unique: true,
      required: true
    }
}, {
    collection: 'categorieproductmodel',
    versionKey: false,
}).pre('save', async function (next: NextFunction): Promise < void > {
  const categorieProduct: ICategorieProductModel = this; // tslint:disable-line

  if (!categorieProduct) {
      return next();
  }
});


export default connections.db.model<ICategorieProductModel>('categorieProductModel', CategorieProductSchema);
