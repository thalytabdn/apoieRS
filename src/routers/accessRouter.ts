import { Router } from "express";
import {
  incrementAccessCount,
  getTotalAccessCount,
} from "../middleware/accessCount";

const router = Router();

router.get("/access", incrementAccessCount, (req, res, next) =>
  res.json({ message: "Access granted" })
);

router.get("/access/count", getTotalAccessCount);

export default router;
