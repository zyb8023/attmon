import * as Router from 'koa-router';
import { UploadBannerController } from '../../controller';
const router = new Router();

router.post('/banner/uploadBanner', UploadBannerController);

export default router;
