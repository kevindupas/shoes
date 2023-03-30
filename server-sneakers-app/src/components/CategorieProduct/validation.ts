import * as Joi from 'joi';
import Validation from '../validation';
import { ICategorieProductModel } from './model';

/**
 * @export
 * @class UserValidation
 * @extends Validation
 */
class CategorieProductValidation extends Validation {
    /**
     * Creates an instance of UserValidation.
     * @memberof CategorieProductValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {ICategorieModel} params
     * @returns {Joi.ValidationResult}
     * @memberof CategorieProductValidation
     */
    createCategorieProduct(
        params: ICategorieProductModel,
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            label: Joi.string().required(),
        });

        return schema.validate(params);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof CategorieProductValidation
     */
    getCategorieProduct(
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
     * @memberof CategorieProductValidation
     */
    removeCategorieProduct(
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

export default new CategorieProductValidation();
