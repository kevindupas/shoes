import * as Joi from 'joi';
import { Types } from 'mongoose';
import ProductModel, { IProductModel } from './model';
import ProductValidation from './validation';
import { IProductService } from './interface';

/**
 * @export
 * @implements {IProductModelService}
 */
const ProductService: IProductService = {
    /**
     * @returns {Promise < IProductModel[] >}
     * @memberof ProductService
     */
    async findAll(): Promise < IProductModel[] > {
        try {
            return await ProductModel.find({}).populate('categorie');
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IProductModel >}
     * @memberof ProductService
     */
    async findOne(id: string): Promise < IProductModel > {
        try {
            const validate: Joi.ValidationResult = ProductValidation.getProduct({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ProductModel.findOne({
                _id: new Types.ObjectId(id),
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IProductModel} product
     * @returns {Promise < IProductModel >}
     * @memberof ProductService
     */
    async insert(body: IProductModel): Promise < IProductModel > {
        try {
            const validate: Joi.ValidationResult = ProductValidation.createProduct(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const product: IProductModel = await ProductModel.create(body);

            return product;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IProductModel >}
     * @memberof ProductService
     */
    async remove(id: string): Promise < IProductModel > {
        try {
            const validate: Joi.ValidationResult = ProductValidation.removeProduct({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const product: IProductModel = await ProductModel.findOneAndRemove({
                _id: new Types.ObjectId(id),
            });

            return product;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default ProductService;
