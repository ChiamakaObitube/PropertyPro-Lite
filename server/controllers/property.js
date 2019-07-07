import propertyModel from '../models/propertyModel';

class propertyController {
  static createNewAd(req, res) {
    const newAd = propertyModel.postAd(req.body);

    return res.status(201).json({
      status: 201,
      message: 'property Ad posted successfully',
      data: newAd,
    });
  }
}

export default propertyController;
