"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
const validation_1 = require("./validation");
/**
 * @export
 * @implements {IRowProductModelService}
 */
const RowProductService = {
    /**
     * @returns {Promise < IRowProductModel[] >}
     * @memberof RowProductService
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('find all rowproducts');
            try {
                return yield model_1.default.find({});
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < IRowProductModel >}
     * @memberof RowProductService
     */
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.getRowProduct({
                    id,
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                return yield model_1.default.findOne({
                    _id: new mongoose_1.Types.ObjectId(id),
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {IRowProductModel} rowproduct
     * @returns {Promise < IRowProductModel >}
     * @memberof RowProductService
     */
    insert(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.createRowProduct(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const rowproduct = yield model_1.default.create(body);
                return rowproduct;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < IRowProductModel >}
     * @memberof RowProductService
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.removeRowProduct({
                    id,
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const rowproduct = yield model_1.default.findOneAndRemove({
                    _id: new mongoose_1.Types.ObjectId(id),
                });
                return rowproduct;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
};
exports.default = RowProductService;
//# sourceMappingURL=service.js.map