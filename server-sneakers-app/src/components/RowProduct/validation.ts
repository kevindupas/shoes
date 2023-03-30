import * as Joi from 'joi';
import Validation from '../validation';
import { IRowProductModel } from './model';

/**
 * @export
 * @class RowProductValidation
 * @extends Validation
 */
class RowProductValidation extends Validation {
    /**
     * Creates an instance of RowProductValidation.
     * @memberof RowProductValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IRowProductModel} params
     * @returns {Joi.ValidationResult}
     * @memberof RowProductValidation
     */
    createRowProduct(
        params: IRowProductModel,
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            passeword: Joi.string().required(),
            email: Joi.string().email({
                minDomainSegments: 2,
            }).required(),
            firstname: Joi.string(),
            lastname: Joi.string(),
        });

        return schema.validate(params);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof RowProductValidation
     */
    getRowProduct(
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
     * @memberof RowProductValidation
     */
    removeRowProduct(
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

export default new RowProductValidation();
