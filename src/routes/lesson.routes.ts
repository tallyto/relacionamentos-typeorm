import { Router } from "express";
const lessonRouter = Router();
import { getRepository } from "typeorm";
import Lesson from "../entity/Lesson";

lessonRouter.post("/", async (req, res) => {
  const repo = getRepository(Lesson);
  const data = await repo.save(req.body);
  return res.json(data);
});

lessonRouter.get("/", async (req, res) => {
  const repo = getRepository(Lesson);
  const data = await repo.find();
  return res.json(data);
});

export default lessonRouter;
