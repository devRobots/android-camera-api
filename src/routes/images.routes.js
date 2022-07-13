import { Router } from "express";

const router = Router();

router.get("/images", (req, res) => {
    res.send("Hello World!");
});

router.post("/", (req, res) => {

});

export default router;