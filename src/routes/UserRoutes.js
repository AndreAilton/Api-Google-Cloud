// src/routes/userRoutes.js
import express from 'express';
import LoginRequire from '../middlewares/TokenRequire.js';
import UserController from '../controllers/UserController.js';  

const router = express.Router();

router.get('/Test',LoginRequire, UserController.index);
router.post('/', UserController.store);
router.get('/',LoginRequire, UserController.show);
router.put('/', LoginRequire, UserController.update);
router.delete('/', UserController.destroy);  

export default router;