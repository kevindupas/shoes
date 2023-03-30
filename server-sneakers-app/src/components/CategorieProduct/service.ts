import * as Joi from 'joi';
import { Types } from 'mongoose';
import CategorieProductModel, { ICategorieProductModel } from './model';
import CategorieProductValidation from './validation';
import { ICategorieProductService } from './interface';

/**
 * @export
 * @implements {ICategorieProductModelService}
 */
const CategorieProductService: ICategorieProductService = {
    /**
     * @returns {Promise < ICategorieProductModel[] >}
     * @memberof CategorieProductService
     */
    async findAll(): Promise < ICategorieProductModel[] > {
        try {
            return await CategorieProductModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICategorieProductModel >}
     * @memberof CategorieProductService
     */
    async findOne(id: string): Promise < ICategorieProductModel > {
        try {
            const validate: Joi.ValidationResult = CategorieProductValidation.getCategorieProduct({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await CategorieProductModel.findOne({
                _id: new Types.ObjectId(id),
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {ICategorieProductModel} categorieProduct
     * @returns {Promise < ICategorieProductModel >}
     * @memberof CategorieProductService
     */
    async insert(body: ICategorieProductModel): Promise < ICategorieProductModel > {
        try {
            const validate: Joi.ValidationResult = CategorieProductValidation.createCategorieProduct(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const categorieProduct: ICategorieProductModel = await CategorieProductModel.create(body);

            return categorieProduct;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICategorieProductModel >}
     * @memberof CategorieProductService
     */
    async remove(id: string): Promise < ICategorieProductModel > {
        try {
            const validate: Joi.ValidationResult = CategorieProductValidation.removeCategorieProduct({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const categorieProduct: ICategorieProductModel = await CategorieProductModel.findOneAndRemove({
                _id: new Types.ObjectId(id),
            });

            return categorieProduct;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default CategorieProductService;
