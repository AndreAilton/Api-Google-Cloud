import { Router } from 'express';

import File from '../controllers/FotosController.js';
import LoginRequire from '../middlewares/TokenRequire.js';
const router = new Router();

router.post('/', LoginRequire, File.store);


export default router;