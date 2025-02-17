import config from '../config/config';
import { EApplicationEnvironment } from '../constants/application';
import { THttpResponse } from '../types/types';
import { Request, Response } from 'express';
import logger from './logger';

export default (req: Request, res: Response, responseStatusCode: number, responseMessage: string, data: unknown = null): void => {
    const response: THttpResponse = {
        success: true,
        statusCode: responseStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message: responseMessage,
        data
    };

    logger.info('RESPONSE_APPLICATION', {
        meta: {
            returns: response
        }
    });

    if (config.NODE_ENV === EApplicationEnvironment.PRODUCTION) {
        delete response.request.ip;
    }

    res.status(responseStatusCode).json(response);
};
