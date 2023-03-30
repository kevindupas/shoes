import * as Joi from 'joi';
import { Types } from 'mongoose';
import OrderModel, { IOrderModel } from './model';
import OrderValidation from './validation';
import { IOrderService } from './interface';

/**
 * @export
 * @implements {IOrderModelService}
 */
const OrderService: IOrderService = {
    /**
     * @returns {Promise < IOrderModel[] >}
     * @memberof OrderService
     */
    async findAll(): Promise < IOrderModel[] > {
        console.log('find all orders');
        try {
            return await OrderModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IOrderModel >}
     * @memberof OrderService
     */
    async findOne(id: string): Promise < IOrderModel > {
        try {
            const validate: Joi.ValidationResult = OrderValidation.getOrder({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await OrderModel.findOne({
                _id: new Types.ObjectId(id),
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IOrderModel} order
     * @returns {Promise < IOrderModel >}
     * @memberof OrderService
     */
    async insert(body: IOrderModel): Promise < IOrderModel > {
        try {
            const validate: Joi.ValidationResult = OrderValidation.createOrder(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const order: IOrderModel = await OrderModel.create(body);

            return order;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IOrderModel >}
     * @memberof OrderService
     */
    async remove(id: string): Promise < IOrderModel > {
        try {
            const validate: Joi.ValidationResult = OrderValidation.removeOrder({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const order: IOrderModel = await OrderModel.findOneAndRemove({
                _id: new Types.ObjectId(id),
            });

            return order;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default OrderService;
