import { Router } from "express";
import posts from "./posts.route.js";
import auth from "./authentication.route.js";
import user from "./user.route";
import jwt from '../../../middlewares/jwt.middleware';

const api = Router();

api.use("/users",jwt,user);
api.use("/posts",jwt, posts);
api.use("/authentication",auth);

export default api;
