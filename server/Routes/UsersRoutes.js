const express = require('express');
const router = express.Router();
const {
  userRegister,
  getAllUsers,
} = require('../Controllers/UsersControllers');

router.route('/register').post(userRegister);
router.route('/get').get(getAllUsers);

module.exports = router;
