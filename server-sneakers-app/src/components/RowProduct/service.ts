import * as Joi from 'joi';
import { Types } from 'mongoose';
import RowProductModel, { IRowProductModel } from './model';
import RowProductValidation from './validation';
import { IRowProductService } from './interface';

/**
 * @export
 * @implements {IRowProductModelService}
 */
const RowProductService: IRowProductService = {
    /**
     * @returns {Promise < IRowProductModel[] >}
     * @memberof RowProductService
     */
    async findAll(): Promise < IRowProductModel[] > {
        console.log('find all rowproducts');
        try {
            return await RowProductModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IRowProductModel >}
     * @memberof RowProductService
     */
    async findOne(id: string): Promise < IRowProductModel > {
        try {
            const validate: Joi.ValidationResult = RowProductValidation.getRowProduct({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await RowProductModel.findOne({
                _id: new Types.ObjectId(id),
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IRowProductModel} rowproduct
     * @returns {Promise < IRowProductModel >}
     * @memberof RowProductService
     */
    async insert(body: IRowProductModel): Promise < IRowProductModel > {
        try {
            const validate: Joi.ValidationResult = RowProductValidation.createRowProduct(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const rowproduct: IRowProductModel = await RowProductModel.create(body);

            return rowproduct;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IRowProductModel >}
     * @memberof RowProductService
     */
    async remove(id: string): Promise < IRowProductModel > {
        try {
            const validate: Joi.ValidationResult = RowProductValidation.removeRowProduct({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const rowproduct: IRowProductModel = await RowProductModel.findOneAndRemove({
                _id: new Types.ObjectId(id),
            });

            return rowproduct;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default RowProductService;
