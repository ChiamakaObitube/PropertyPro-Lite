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

  static getAllProperty(req, res) {
    const allProperty = propertyModel.getAllProperty();

    if (allProperty.length === 0) return res.status(404).send('There are no properties');

    if (!allProperty) {
      return res.status(404).send({
        status: 404,
        error: 'There are no properties in this database',
      });
    }

    return res.status(200).send({
      status: 200,
      message: 'All Property Ads retrieved successfully.',
      data: allProperty,
    });
  }

}

export default propertyController;
