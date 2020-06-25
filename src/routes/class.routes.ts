import { Router } from "express";
const classRouter = Router();
import { getRepository } from "typeorm";
import Class from "../entity/Class";

classRouter.post("/", async (req, res) => {
  const repo = getRepository(Class);
  const data = await repo.save(req.body);
  return res.json(data);
});

classRouter.get("/", async (req, res) => {
  const repo = getRepository(Class);
  const data = await repo.find();
  return res.json(data);
});

export default classRouter;
