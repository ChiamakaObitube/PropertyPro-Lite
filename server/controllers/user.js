import UserModel from '../models/userModel';

class userController {
  static userSignup(req, res) {
    if (!req.body.email || !req.body.firstName || !req.body.lastName
			|| !req.body.address || !req.body.password) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    const signUpInfo = UserModel.signup(req.body);
    return res.status(201).json({
      status: 201,
      message: 'Account created successfully.',
    });
  }
}
export default userController;
