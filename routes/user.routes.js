const { Router } = require('express');
const router = Router();
const { getUsers, addEmployed } = require('../controllers/users.controlles');

router.post('/', getUsers);
router.post('/', addEmployed)



module.exports = router;