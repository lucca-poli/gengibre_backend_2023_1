import { Request, Response } from "express";

export default class ClothesController {
  public async list(req: Request, res: Response): Promise<Response> {
    return res.json({ message: "Hello World" });
  }
}
