import express from 'express';
import { deleteMessage, getMessage, sendMessage } from '../controllers/messageController.js';
import { adminProtect, protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/send-message').post(protect, adminProtect, sendMessage);
router.route('/get-message').get(protect, getMessage);
router.route('/delete').delete(protect, adminProtect, deleteMessage);

export default router;