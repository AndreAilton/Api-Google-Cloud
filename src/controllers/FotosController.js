import multer from 'multer';
import multerConfig from '../config/multerconfig.js';

import file from '../models/Fotos.js';

const upload = multer(multerConfig).single('file');

class FileController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(200).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const user_id = req.userId;
        const File = await file.create({ originalname, filename, user_id });

        return res.json(File);
      } catch (e) {
        return res.status(400).json({
          errors: ['Usuario Invalido'],
        });
      }
    });
  }
}

export default new FileController();