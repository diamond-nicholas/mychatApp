const express = require('express');
const router = express.Router();
const {
  userRegister,
  loginUser,
  getAllUsers,
  setAvatar,
} = require('../Controllers/UsersControllers');

router.route('/register').post(userRegister);
router.route('/login').post(loginUser);
router.route('/get').get(getAllUsers);
router.route('/setavatar/:id').post(setAvatar);

module.exports = router;
