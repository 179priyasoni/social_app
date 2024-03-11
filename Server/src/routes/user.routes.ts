import express from "express";
import  * as userContoller from "../controllers/user.controller"


let router = express.Router();
router.get('/',userContoller.FirstAPI);

export default router;