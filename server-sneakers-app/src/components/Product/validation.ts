import * as Joi from 'joi';
import Validation from '../validation';
import { IProductModel } from './model';

/**
 * @export
 * @class UserValidation
 * @extends Validation
 */
class ProductValidation extends Validation {
    /**
     * Creates an instance of UserValidation.
     * @memberof ProductValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IProductModel} params
     * @returns {Joi.ValidationResult}
     * @memberof ProductValidation
     */
    createProduct(
        params: IProductModel,
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
          unit_price: Joi.number().required(),
          categorie: Joi.string().required(),
          name: Joi.string().required(),
          description: Joi.string(),
          quantity: Joi.number(),
          brand: Joi.string(),
          gamme: Joi.string(),
          images: Joi.array().items(Joi.string()),
          colors: Joi.array().items(Joi.string()),
          sizes: Joi.array().items(Joi.number()),
        });

        return schema.validate(params);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof ProductValidation
     */
    getProduct(
        body: {
            id: string
        },
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof ProductValidation
     */
    removeProduct(
        body: {
            id: string
        },
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }
}

export default new ProductValidation();
