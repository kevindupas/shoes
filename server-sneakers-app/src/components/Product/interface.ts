import { IProductModel } from './model';

/**
 * @export
 * @interface IProductService
 */
export interface IProductService {

    /**
     * @returns {Promise<IProductModel[]>}
     * @memberof IProductService
     */
    findAll(): Promise<IProductModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IProductModel>}
     * @memberof IProductService
     */
    findOne(code: string): Promise<IProductModel>;

    /**
     * @param {IProductModel} productModel
     * @returns {Promise<IProductModel>}
     * @memberof IProductService
     */
    insert(productModel: IProductModel): Promise<IProductModel>;

    /**
     * @param {string} id
     * @returns {Promise<IProductModel>}
     * @memberof IProductService
     */
    remove(id: string): Promise<IProductModel>;
}
