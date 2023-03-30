import { NextFunction, Request, Response } from 'express';
import OrderService from './service';
import { HttpError } from '../../config/error';
import { IOrderModel } from './model';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const orders: IOrderModel[] = await OrderService.findAll();

        res.status(200).json(orders);
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
        const order: IOrderModel = await OrderService.findOne(req.params.id);

        res.status(200).json(order);
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
        const order: IOrderModel = await OrderService.insert(req.body);

        res.status(201).json(order);
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
        const order: IOrderModel = await OrderService.remove(req.params.id);

        res.status(200).json(order);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
