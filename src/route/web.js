import express  from "express";
import homeController from "../controller/homeController"

let router = express.Router();

let initWebRoute = (app) => {
    router.get('/', homeController.getPage);
    return app.use('/', router);
}

export default initWebRoute;