import * as log4js from 'log4js';

log4js.configure({
  appenders: {
    stdout: {//控制台输出
        type: 'console'
    },
    req: {  //请求转发日志
        type: 'dateFile',    //指定日志文件按时间打印
        filename: 'logs/reqlog/req',  //指定输出文件路径
        pattern: 'yyyy-MM-dd.log',
        alwaysIncludePattern: true
    },
    err: {  //错误日志
        type: 'dateFile',
        filename: 'logs/errlog/err',
        pattern: 'yyyy-MM-dd.log',
        alwaysIncludePattern: true
    },
    oth: {  //其他日志
        type: 'dateFile',
        filename: 'logs/othlog/oth',
        pattern: 'yyyy-MM-dd.log',
        alwaysIncludePattern: true
    }

},
categories: {
    default: { appenders: ['stdout', 'req'], level: 'debug' },
    err: { appenders: ['stdout', 'err'], level: 'error' },
    info: {appenders: ['oth'], level: 'info'}
}
})

/** default err  info*/
export const getLogger = (name? : string) => {//name取categories项
  return log4js.getLogger(name || 'default')
}