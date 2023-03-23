const { createLogger, transports, format } = require("winston");
const { combine, timestamp, simple, colorize, label, printf } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const printLogFormat = {
    file: combine(
        label({
            label: "백엔드 맛보기"
        }),
        timestamp({
            format: "YYYY-MM-DD HH:mm:dd",
        }),
        printFormat
    ),
    console: combine(
        colorize(),
        simple()
    ),
};

const options = {
    file:  new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level: "info",
        format: printLogFormat.file,
    }),
    console: new transports.Console({
        level: "info",
        format: printLogFormat.console,
    }),
};

const logger = createLogger({
    transports: [options.file],
});

// NODE_ENV가 "dev"면 개발 중인 서버, "production"은 운영 중인 서버
// "dev"라면, 콘솔 창에서도 로그를 출력하도록 추가한다.
if (process.env.NODE_ENV !== "production") {
    logger.add(options.console);
}

logger.stream = {
    write: (message) => logger.info(message),
};

module.exports = logger;