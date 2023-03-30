import { ICategorieProductModel } from './model';

/**
 * @export
 * @interface ICategorieProductService
 */
export interface ICategorieProductService {

    /**
     * @returns {Promise<ICategorieProductModel[]>}
     * @memberof ICategorieProductService
     */
    findAll(): Promise<ICategorieProductModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<ICategorieProductModel>}
     * @memberof ICategorieProductService
     */
    findOne(code: string): Promise<ICategorieProductModel>;

    /**
     * @param {ICategorieProductModel} categorieProductModel
     * @returns {Promise<ICategorieProductModel>}
     * @memberof ICategorieProductService
     */
    insert(categorieProductModel: ICategorieProductModel): Promise<ICategorieProductModel>;

    /**
     * @param {string} id
     * @returns {Promise<ICategorieProductModel>}
     * @memberof ICategorieProductService
     */
    remove(id: string): Promise<ICategorieProductModel>;
}
