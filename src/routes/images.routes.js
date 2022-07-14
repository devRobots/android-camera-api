import { Router } from "express";
import { imageController } from "../controllers/images.controller.js";

const router = Router();

router.get("/api/images", imageController.getImages);
router.post("/api/images", imageController.postImage);

export default router;