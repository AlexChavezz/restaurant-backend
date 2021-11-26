const { Router } = require('express');
const { getData } = require('../controllers/menu.controller');
const router = Router();

router.get('/', getData);


module.exports = router;