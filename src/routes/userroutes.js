import  express from "express";
import usercontroller from "../controllers/usercontroller";

const router=express.Router()
router.get("/",usercontroller.createuser)

export default router