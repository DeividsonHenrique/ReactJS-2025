import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

router.post("/createusers", UserController.createUser);

export { router };
