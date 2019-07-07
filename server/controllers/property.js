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

  static getSpecificProperty(req, res) {
    const { id } = req.params;
    const property = propertyModel.getSpecificProperty(Number(id));

    if (!property) {
      return res.status(404).json({
        status: 404,
        message: 'This property does not exist',
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'Property Ad retrieved successfully.',
      data: property,
    });
  }

}

export default propertyController;
