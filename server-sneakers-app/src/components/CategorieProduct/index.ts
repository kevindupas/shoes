import { NextFunction, Request, Response } from 'express';
import CategorieProductService from './service';
import { HttpError } from '../../config/error';
import { ICategorieProductModel } from './model';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const categorieProducts: ICategorieProductModel[] = await CategorieProductService.findAll();

        res.status(200).json(categorieProducts);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findOne(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const categorieProduct: ICategorieProductModel = await CategorieProductService.findOne(req.params.id);

        res.status(200).json(categorieProduct);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function create(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const categorieProduct: ICategorieProductModel = await CategorieProductService.insert(req.body);

        res.status(201).json(categorieProduct);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function remove(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const categorieProduct: ICategorieProductModel = await CategorieProductService.remove(req.params.id);

        res.status(200).json(categorieProduct);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
