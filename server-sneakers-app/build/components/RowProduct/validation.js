"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const validation_1 = require("../validation");
/**
 * @export
 * @class RowProductValidation
 * @extends Validation
 */
class RowProductValidation extends validation_1.default {
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
    createRowProduct(params) {
        const schema = Joi.object().keys({
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
    getRowProduct(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof RowProductValidation
     */
    removeRowProduct(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
}
exports.default = new RowProductValidation();
//# sourceMappingURL=validation.js.map