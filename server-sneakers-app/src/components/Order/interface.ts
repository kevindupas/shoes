import { IOrderModel } from './model';

/**
 * @export
 * @interface IOrderService
 */
export interface IOrderService {

    /**
     * @returns {Promise<IOrderModel[]>}
     * @memberof IOrderService
     */
    findAll(): Promise<IOrderModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IOrderModel>}
     * @memberof IOrderService
     */
    findOne(code: string): Promise<IOrderModel>;

    /**
     * @param {IOrderModel} userModel
     * @returns {Promise<IOrderModel>}
     * @memberof IOrderService
     */
    insert(userModel: IOrderModel): Promise<IOrderModel>;

    /**
     * @param {string} id
     * @returns {Promise<IOrderModel>}
     * @memberof IOrderService
     */
    remove(id: string): Promise<IOrderModel>;
}
