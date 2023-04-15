import { Router } from "express";
import ClothesController from "../controllers/ClothesController";

const clothesRouter = Router();
const clothesController = new ClothesController();

clothesRouter.get("/", clothesController.list);

export default clothesRouter;
