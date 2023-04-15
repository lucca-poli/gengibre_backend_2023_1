import { Router } from 'express';
import clothesRouter from "@modules/products/infra/http/routes/clothes.routes";

const routes = Router();

routes.use('/clothes', clothesRouter);

export default routes;
