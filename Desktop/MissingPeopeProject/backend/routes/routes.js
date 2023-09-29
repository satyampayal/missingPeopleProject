import express from "express";
import {registeruser} from '../controllers/routeControllers'
const route=express.Router();

route.post('/register',registeruser);
