import { Router } from 'express';
import propertyController from '../controllers/property';

import upload from '../helpers/multerConfig';
import cloudinaryImage from '../helpers/cloudinaryConfig';

const router = Router();

router.post('/property', upload.single('image_url'), cloudinaryImage, propertyController.createNewAd);
router.get('/property', propertyController.getAllProperty);

export default router;
