const UserController = require('../controllers/UserController');

const router = require('express').Router();

router.get('/:id', UserController.Read);
router.get('/get-user-email/:email', UserController.FindByEmail);

router.post('/create-user', UserController.Create);


module.exports = router;