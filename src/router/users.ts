import express from "express";

import { deleteUser, getAllUsers } from "../controllers/users";
import { isAuthenticated, isOwner } from "middlewares";

export default (router: express.Router) => {
  router.get("/users", getAllUsers, isAuthenticated);
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
};
