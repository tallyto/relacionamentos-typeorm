import { Router } from "express";
import classRouter from "./class.routes";
import contentRouter from "./content.routes";
import lessonRouter from "./lesson.routes";
import studantRouter from "./student.routes";

const routes = Router();

routes.use("/class", classRouter);
routes.use("/content", contentRouter);
routes.use("/lesson", lessonRouter);
routes.use("/studant", studantRouter);

export default routes;
