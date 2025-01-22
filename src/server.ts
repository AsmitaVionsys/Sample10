import app from './app';
import config from './config/config';
import logger from './utils/logger';

const server = app.listen(config.PORT);

(() => {
    try {
        logger.info('APPLICATION CONNECTION', {
            meta: {
                PORT: config.PORT,
                NODE_ENV: process.env.NODE_ENV
            }
        });
    } catch (error) {
        logger.info('APPLICATION CONNECTION ERROR', error);

        server.close((error) => {
            if (error) {
                logger.error(`SERVER_CLOSE_ERROR`, { meta: error });
            }
            process.exit(1);
        });
    }
})();

export default server;
