import express from 'express';
import multer from 'multer';
import cloudinary from '../config/cloudinaryConfig.js'; // Adjust the path accordingly
import { CloudinaryStorage } from 'multer-storage-cloudinary';

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'products', // Replace with your desired Cloudinary folder name
    upload_preset: 'E-commerce', // Replace with your upload preset name
    format: async (req, file) => 'jpg', // You can change the format as needed
  },
});

const upload = multer({ storage: storage });
const uploadSingleImage = upload.single('image');

router.post('/', (req, res) => {
  uploadSingleImage(req, res, (err) => {
    if (err) {
      res.status(400).send({ message: err.message });
    } else if (req.file) {
      res.status(200).send({
        message: 'Image uploaded successfully',
        image: req.file.path, // The Cloudinary URL is stored in req.file.path
      });
    } else {
      res.status(400).send({ message: 'No image file provided' });
    }
  });
});

export default router;
