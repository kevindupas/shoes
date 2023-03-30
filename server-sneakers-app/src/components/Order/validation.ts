import * as Joi from 'joi';
import Validation from '../validation';
import { IOrderModel } from './model';

/**
 * @export
 * @class OrderValidation
 * @extends Validation
 */
class OrderValidation extends Validation {
    /**
     * Creates an instance of OrderValidation.
     * @memberof OrderValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IOrderModel} params
     * @returns {Joi.ValidationResult}
     * @memberof OrderValidation
     */
    createOrder(
        params: IOrderModel,
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
     * @memberof OrderValidation
     */
    getOrder(
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
     * @memberof OrderValidation
     */
    removeOrder(
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

export default new OrderValidation();
