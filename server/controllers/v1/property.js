import propertyModel from '../../models/propertyModel';
import properties from '../../database/property';

class propertyController {
  static createNewAd(req, res) {
    const propertyExist = propertyModel.getSpecificProperty(req.body.id);

    if (propertyExist) {
      return res.status(400).send({
        status: 400,
        error: 'Property already exist',
      });
    }
    const newAd = propertyModel.postAd(req.body);

    return res.status(201).json({
      status: 201,
      message: 'property Ad posted successfully',
      data: newAd,
    });
  }

  static updatePropertyData(req, res) {
    const { id } = req.params;
    const property = propertyModel.getSpecificProperty(Number(id));

    if (!property) {
      return res.status(404).json({
        status: 404,
        message: 'This property does not exist',
      });
    }

    const updatedProperty = {
      id: property.id,
      status: req.body.status || property.status,
      price: req.body.price || property.price,
      type: req.body.type || property.type,
      city: req.body.city || property.city,
      address: req.body.address || property.address,
    };

    return res.status(200).json({
      status: 200,
      message: 'property successfully updated',
      data: updatedProperty,
    });
  }

  static markPropertySold(req, res) {
    const { id } = req.params;
    const property = propertyModel.getSpecificProperty(Number(id));

    if (!property) {
      return res.status(404).json({
        status: 404,
        message: 'This property does not exist',
      });
    }
    if (!property.status) {
      return res.status(404).json({
        status: 400,
        error: 'property status is required',
      });
    }

    property.status = req.body.status;
    return res.status(200).json({
      status: 200,
      message: 'property successfully marked as sold',
      data: property,
    });
  }


  static getAllProperty(req, res) {
    const allProperties = propertyModel.getAllProperty();

    if (allProperties.length === 0) return res.status(404).send('There are no properties');

    if (!allProperties) {
      return res.status(404).send({
        status: 404,
        error: 'There are no properties in this database',
      });
    }

    // Filtering properties of a specifc type e.g 1 bedroom, 2 bedroom, mini-flat
    let response = [];
    console.log(req.query);
    if (typeof req.query.type !== 'undefined') {
      allProperties.filter((property) => {
        if (property.type.toString() == req.query.type) {
          response.push(property);
        }
      });
    }
    // If there is not filtering of properties, return all cars
    if (Object.keys(req.query).length === 0) {
      response = allProperties;
    }
    // returns all cars
    res.status(200).json({
      status: 200,
      message: 'All Property Ads retrieved successfully.',
      data: response,
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

  static deleteProperty(req, res) {
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
      message: 'Property advert deleted successfully',
    });
  }

}

export default propertyController;
