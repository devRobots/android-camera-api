import { Router } from "express";
import { imageController } from "../controllers/images.controller.js";

const router = Router();

router.get("/images", imageController.getImages);
router.post("/images", imageController.postImage);

export default router;