const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if(!name || !email || !password) {
    return res.status(400)
    throw new Error('Please provide all required fields');
  }
  res.send('Register Route');
});

const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route');
});

module.exports = {
  registerUser,
  loginUser
}