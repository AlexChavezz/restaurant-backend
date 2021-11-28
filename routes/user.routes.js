const { Router } = require('express');
const router = Router();
const { getUsers, getUser, addEmployed, deleteUser } = require('../controllers/users.controlles');

router.get('/get', getUsers);
router.post('/get', getUser);
router.post('/post', addEmployed);
router.delete('/delete/:uid', deleteUser);



module.exports = router;