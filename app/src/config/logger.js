const { createLogger, transports, format } = require("winston");
const { combine, timestamp, json, simple, colorize, label, printf } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const printLogFormat = combine(
    label({
        label: "백엔드 맛보기"
    }),
    colorize(),
    timestamp({
        format: "YYYY-MM-DD HH:mm:dd",
    }),
    printFormat
);

const logger = createLogger({
    transports: [
        new transports.Console({
            level: "info",
            format: printLogFormat,
        }),
    ], //print on console
});

module.exports = logger;