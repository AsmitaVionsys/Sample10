import { NextFunction, Request, Response } from 'express';
import htttpResponse from '../utils/htttpResponse';
import responseMessage from '../constants/responseMessage';
import httpError from '../utils/httpError';

export default {
    self: (req: Request, res: Response, nextFunc: NextFunction) => {
        try {
            htttpResponse(req, res, 200, responseMessage.SUCCESS);
        } catch (err) {
            httpError(nextFunc, err, req, 500);
        }
    }
};
