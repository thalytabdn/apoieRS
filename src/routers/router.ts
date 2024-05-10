import { Router } from "express";
import pointController from "../controllers/pointController";

const router = Router();

router.post("/points", (req, res, next) =>
  new pointController(req, res, next).create()
);

router.get("/points/:uf/:cidade", (req, res, next) =>
  new pointController(req, res, next).getPoints()
);

router.get("/points", (req, res, next) =>
  new pointController(req, res, next).getAllPoints()
);

router.put("/points/:id", (req, res, next) =>
  new pointController(req, res, next).update()
);

router.delete("/points/:id", (req, res, next) =>
  new pointController(req, res, next).delete()
);

export default router;
