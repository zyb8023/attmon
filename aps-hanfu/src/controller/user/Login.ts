import * as Koa from 'koa';
import { checkLogin } from '../../service/user';
const LoginController = async (ctx: Koa.Context, next: Koa.Next) => {
  const request = ctx.request;
  let {userName,userPwd} = request.body;
  let result = await checkLogin(userName, userPwd);
  await next();
  ctx.body = result;
}

export default LoginController;
