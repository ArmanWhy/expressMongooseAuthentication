import express from "express";
import userController from "../Controllers/userController.js";

//creating router object
const router = express.Router();

//base routing for all controllers
router.get('/', userController.home )
router.get("/registration", userController.registration)
router.post('/registration', userController.createUserDoc);
router.get("/login", userController.login);
router.post('/login', userController.verifyLogin);
router.get('/dashboard', userController.dashboard)


export default router 