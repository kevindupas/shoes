"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const validation_1 = require("../validation");
/**
 * @export
 * @class UserValidation
 * @extends Validation
 */
class CategorieProductValidation extends validation_1.default {
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
    createCategorieProduct(params) {
        const schema = Joi.object().keys({
            label: Joi.string().required(),
        });
        return schema.validate(params);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof CategorieProductValidation
     */
    getCategorieProduct(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof CategorieProductValidation
     */
    removeCategorieProduct(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new CategorieProductValidation();
//# sourceMappingURL=validation.js.map