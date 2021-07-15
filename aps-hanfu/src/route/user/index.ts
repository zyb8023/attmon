import * as Router from 'koa-router';
import { LoginController, RegisterController } from '../../controller';
const router = new Router();

router.post('/user/login', LoginController);
router.post('/user/register', RegisterController);

export default router;
