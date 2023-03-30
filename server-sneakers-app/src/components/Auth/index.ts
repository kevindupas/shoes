import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import app from '../../config/server/server';
import AuthService from './service';
import HttpError from '../../config/error';
import { IUserModel } from '../User/model';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function signup(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const user: IUserModel = await AuthService.createUser(req.body);
        console.log('user after create', user)
        const token: string = jwt.sign({ email: user.email }, app.get('secret'), {
            expiresIn: '60m',
        });

        res.json({
            status: 200,
            logged: true,
            token,
            _id: user._id,
            email: user.email,
            firstname: user.firstname || '',
            lastname: user.lastname || '',
            role: user.role,
            message: 'Sign in successfull',
        });
    } catch (error) {
        if (error.code === 500) {
            return next(new HttpError(error.message.status, error.message));
        }
        res.json({
            status: 400,
            message: error.message,
        });
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function login(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        let user: IUserModel = await AuthService.getUser(req.body);

        const token: string = jwt.sign({ email: user.email }, app.get('secret'), {
            expiresIn: '60m',
        });
        console.log('token: ', token);
        console.log('user', user);
        delete user["password"];
        console.log(user)
        const {_id, firstname, lastname, email, role} = user;
        res.json({
            status: 200,
            logged: true,
            token,
            message: 'Sign in successfull',
            _id,
            firstname,
            lastname,
            email,
            role
        });
    } catch (error) {
        if (error.code === 500) {
            return next(new HttpError(error.message.status, error.message));
        }

        res.json({
            status: 400,
            message: error.message,
        });
    }
}
