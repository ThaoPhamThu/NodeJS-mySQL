import express  from "express";
import homeController from "../controller/homeController"

let router = express.Router();

let initWebRoute = (app) => {
    router.get('/', homeController.getPage);
    router.get('/detail/user/:userId', homeController.getDatailPage);
    router.post('/create-new-user', homeController.createUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:userId', homeController.editUser);
    router.post('/update-user', homeController.updateUser);
    return app.use('/', router);
}

export default initWebRoute;