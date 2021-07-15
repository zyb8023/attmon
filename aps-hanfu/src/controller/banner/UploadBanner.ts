import * as Koa from 'koa';
import { getLogger } from '../../lib/log4';
import * as fs from 'fs';
import * as path from 'path';

const logger = getLogger();
const UploadBannerController = async (ctx: Koa.Context, next: Koa.Next) => {
  const file = ctx.request.files;
  logger.info(file)
  logger.info(ctx.request.body)
    // 创建可读流
  ctx.body={
    code: 200,
    msg: 'success',
    data: {
      fileName: '111111',
    }
  }
}

export default UploadBannerController;
