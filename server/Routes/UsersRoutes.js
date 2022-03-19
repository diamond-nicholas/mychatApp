const express = require('express');
const router = express.Router();
const {
  userRegister,
  loginUser,
  getAllUsers,
} = require('../Controllers/UsersControllers');

router.route('/register').post(userRegister);
router.route('/login').post(loginUser);
router.route('/get').get(getAllUsers);

module.exports = router;
