import * as Router from 'koa-router';
import userRouter from './user';
import bannerRouter from './banner';
const router = new Router();

router.use(userRouter.routes());
router.use(bannerRouter.routes());

export default router;
