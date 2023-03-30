import { NextFunction, Request, Response } from 'express';
import RowProductService from './service';
import { HttpError } from '../../config/error';
import { IRowProductModel } from './model';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const rowproducts: IRowProductModel[] = await RowProductService.findAll();

        res.status(200).json(rowproducts);
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
        const rowproduct: IRowProductModel = await RowProductService.findOne(req.params.id);

        res.status(200).json(rowproduct);
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
        const rowproduct: IRowProductModel = await RowProductService.insert(req.body);

        res.status(201).json(rowproduct);
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
        const rowproduct: IRowProductModel = await RowProductService.remove(req.params.id);

        res.status(200).json(rowproduct);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
