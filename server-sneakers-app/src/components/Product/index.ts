import { NextFunction, Request, Response } from 'express';
import ProductService from './service';
import { HttpError } from '../../config/error';
import { IProductModel } from './model';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const products: IProductModel[] = await ProductService.findAll();

        res.status(200).json(products);
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
        const product: IProductModel = await ProductService.findOne(req.params.id);

        res.status(200).json(product);
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
        const product: IProductModel = await ProductService.insert(req.body);

        res.status(201).json(product);
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
        const product: IProductModel = await ProductService.remove(req.params.id);

        res.status(200).json(product);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
