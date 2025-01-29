import { Router } from 'express';
import Token from '../controllers/TokenController.js';
const router = new Router();

router.post('/', Token.store);


export default router;