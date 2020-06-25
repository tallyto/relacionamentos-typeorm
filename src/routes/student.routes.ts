import { Router } from "express";
const studantRouter = Router();
import { getRepository } from "typeorm";
import Studant from "../entity/Studant";

studantRouter.post("/", async (req, res) => {
  const repo = getRepository(Studant);
  const data = await repo.save(req.body);
  return res.json(data);
});

studantRouter.get("/", async (req, res) => {
  const repo = getRepository(Studant);
  const data = await repo.find();
  return res.json(data);
});

export default studantRouter;
