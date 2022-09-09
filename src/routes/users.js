const UserController = require('../controllers/UserController');

const router = require('express').Router();

//GET
router.get('/user/:id', UserController.Read);
router.get('/find-all', UserController.FindAll);
router.get('/list-filter', UserController.FilterUsers)

//POST
router.post('/create-user', UserController.Create);

//DELETE
router.delete('/user/:id/delete', UserController.Delete);

//PUT
router.put('/user/:id/update', UserController.Update);


module.exports = router;