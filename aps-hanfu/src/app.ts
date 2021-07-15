import * as Koa from 'koa';
import * as color from 'colors';
import * as koaBody from 'koa-body';
import * as cors from 'koa-cors';
import * as session from 'koa-session';
import * as path from 'path';
import { getLogger } from './lib/log4';
const infoLog = getLogger('info');

import router from './route';



const app = new Koa();

app.keys = ['some secret hurr'];


// const CONFIG = {
//   key: 'setCookie',                        // cookie的键名
//   maxAge: 86400000,                       // 过期时间，这里为一天的期限
//   overwrite: true,                        // 是否覆盖cookie
//   httpOnly: true,                         // 是否JS无法获取cookie
//   signed: true,                           // 是否生成cookie的签名，防止浏览器暴力篡改
// }

async function logger(ctx: any, next: () => void) {
  // infoLog.info(ctx);
  next();
}




// app.use(session(CONFIG, app));
// 解决跨域
app.use(cors({
  origin: function (ctx) {
    return '*'  // 允许来自所有域名请求
    //  return 'http://localhost:8080';
  },
  maxAge: 5,
  credentials: true,
}))
app.use(koaBody({
  multipart: true,
  formidable: {
      maxFileSize: 200*1024*1024,   // 设置上传文件大小最大限制，默认2M
      // uploadDir:path.join(__dirname,'public/upload/'), // 设置文件上传目录
      // keepExtensions: true,    // 保持文件的后缀
  },
  
}))
app.use(router.routes())
app.use(logger);

app.on('error', (error) => {
  console.log(error);
})

app.listen(3000, () => {
  console.log(color.green('Server running on port 3000'));
});
