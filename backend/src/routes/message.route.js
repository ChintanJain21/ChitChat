import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import { getMessages, getUserforSidebar, sendMessage } from '../controllers/message.controller.js';

const router = express.Router();

router.get("/users", protectRoute, getUserforSidebar);
router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);

export default router;