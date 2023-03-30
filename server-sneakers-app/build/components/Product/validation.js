"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const validation_1 = require("../validation");
/**
 * @export
 * @class UserValidation
 * @extends Validation
 */
class ProductValidation extends validation_1.default {
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
    createProduct(params) {
        const schema = Joi.object().keys({
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
    getProduct(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof ProductValidation
     */
    removeProduct(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new ProductValidation();
//# sourceMappingURL=validation.js.map