import { createLogger, format, transports } from 'winston';
import { ConsoleTransportInstance } from 'winston/lib/winston/transports';
import util from 'util';
import { blue, green, magenta, red, yellow } from 'colorette';
import config from '../config/config';
import * as sourceMapSupport from 'source-map-support';
import { EApplicationEnvironment } from '../constants/application';

sourceMapSupport.install();
const colorizeLevel = (level: string) => {
    switch (level) {
        case 'ERROR':
            return red(level);
        case 'INFO':
            return blue(level);
        case 'WARN':
            return yellow(level);
        default:
            return level;
    }
};

const consoleLogFormat = format.printf((info) => {
    const { meta = {}, level, message, timestamp } = info;
    const customLevel = colorizeLevel(level.toUpperCase());
    const customTimestamp = green(timestamp as string);
    const customMessage = message;
    const customMeta = util.inspect(meta, {
        showHidden: true,
        depth: null,
        colors: true
    });

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const customLog = `${customLevel} [${customTimestamp}] ${customMessage}\n${magenta('META')} ${customMeta}\n`;
    return customLog;
});
const consoleTransport = (): Array<ConsoleTransportInstance> => {
    if (config.NODE_ENV === EApplicationEnvironment.DEVELOPMENT) {
        return [
            new transports.Console({
                level: 'info',
                format: format.combine(format.timestamp(), consoleLogFormat)
            })
        ];
    }
    return [];
};

export default createLogger({
    defaultMeta: {
        meta: {}
    },
    transports: [...consoleTransport()]
});
