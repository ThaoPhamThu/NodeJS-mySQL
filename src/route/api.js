import express  from "express";
import apiController from '../controller/apiController'

let router = express.Router();

let initAPIRoute = (app) => {
    router.get('/users', apiController.getAllUsers);
    router.post('/create-user', apiController.createNewUser);
    router.put('/update-user', apiController.updateUser);
    router.delete('/delete-user/:userId', apiController.deleteUser);
    return app.use('/api/v1', router);
}

export default initAPIRoute;