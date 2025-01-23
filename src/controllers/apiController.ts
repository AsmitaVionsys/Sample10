import { NextFunction, Request, Response } from 'express';
import htttpResponse from '../utils/htttpResponse';
import responseMessage from '../constants/responseMessage';
import httpError from '../utils/httpError';
import quicker from '../utils/quicker';

export default {
    self: (req: Request, res: Response, nextFunc: NextFunction) => {
        try {
            htttpResponse(req, res, 200, responseMessage.SUCCESS);
        } catch (err) {
            httpError(nextFunc, err, req, 500);
        }
    },

    health: (req: Request, res: Response, nextFunc: NextFunction) => {
        try {
            const healthData = {
                application: quicker.getApplicationHealth(),
                system: quicker.getSystemHealth(),
                timeStamp: Date.now()
            };
            htttpResponse(req, res, 200, responseMessage.SUCCESS, healthData);
        } catch (err) {
            httpError(nextFunc, err, req, 500);
        }
    }
};
