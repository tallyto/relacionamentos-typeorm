import { Router } from "express";
const contentRouter = Router();
import { getRepository } from "typeorm";
import Content from "../entity/Content";

contentRouter.post("/", async (req, res) => {
  const repo = getRepository(Content);
  const data = await repo.save(req.body);
  return res.json(data);
});

contentRouter.get("/", async (req, res) => {
  const repo = getRepository(Content);
  const data = await repo.find();
  return res.json(data);
});

export default contentRouter;
