import UserModel from '../models/userModel';
import users from '../database/user';

class userController {
  static userSignup(req, res) {
    if (!req.body.email || !req.body.firstName || !req.body.lastName
			|| !req.body.address || !req.body.password) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    const userExist = UserModel.getSpecificUser(req.body.email);

    if (userExist) {
      return res.status(400).send({
        status: 400,
        error: 'User already exist',
      });
    }

    return res.status(201).json({
      status: 201,
      message: 'Account created successfully.',
    });
  }

  static userSignin(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        message: 'Enter your Email or Password',
      });
    }

    const existingUser = users.find(user => user.email === req.body.email);
    if (!existingUser) {
      return res.status(401).json({
        status: 401,
        error: 'Authentication failed',
      });
    }

    const SigninInfo = req.body;

    return res.status(200).json({
      status: 200,
      message: 'user logged in successfully',
      data: SigninInfo,
    });
  }
}
export default userController;
