const User = require('../models/UsersModel');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
      return res.json({ msg: 'Username already used', status: false });
    }
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: 'Email already used', status: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    delete user.password;

    return res.status(200).json({ user, status: true });
  } catch (error) {
    console.log(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // const usernameCheck = await User.findOne({ username });
    // if (usernameCheck) {
    //   return res.json({ msg: 'Username already used', status: false });
    // }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        msg: 'Incorrect email address or password',
        status: false,
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.json({
        msg: 'Incorrect email address or password',
        status: false,
      });
    }
    delete user.password;
    return res.status(200).json({ user, status: true });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    return res.status(200).json({
      message: 'Users successfully fetched',
      nbHits: user.length,
      user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  userRegister,
  loginUser,
  getAllUsers,
};
