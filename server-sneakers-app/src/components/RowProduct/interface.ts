import { IRowProductModel } from './model';

/**
 * @export
 * @interface IRowProductService
 */
export interface IRowProductService {

    /**
     * @returns {Promise<IRowProductModel[]>}
     * @memberof IRowProductService
     */
    findAll(): Promise<IRowProductModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IRowProductModel>}
     * @memberof IRowProductService
     */
    findOne(code: string): Promise<IRowProductModel>;

    /**
     * @param {IRowProductModel} rowproductModel
     * @returns {Promise<IRowProductModel>}
     * @memberof IRowProductService
     */
    insert(rowproductModel: IRowProductModel): Promise<IRowProductModel>;

    /**
     * @param {string} id
     * @returns {Promise<IRowProductModel>}
     * @memberof IRowProductService
     */
    remove(id: string): Promise<IRowProductModel>;
}
