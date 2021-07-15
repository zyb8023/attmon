import * as Koa from 'koa';
import { getLogger } from '../lib/log4';
const errorLog = getLogger('err');

const error = async (ctx: Koa.BaseResponse, next: Koa.Next) => {
  try {
    next();
  } catch (error) {
    errorLog.info(error);
    ctx.body = {
      code: 500,
      msg: '服务器未知错误！'
    }
  }
}

export default error;