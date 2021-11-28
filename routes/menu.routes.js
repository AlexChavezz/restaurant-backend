const { Router } = require('express');
const { getMenu, updateMenu } = require('../controllers/menu.controller');
const router = Router();

router.get('/', getMenu);
router.put('/:id', updateMenu)

module.exports = router;