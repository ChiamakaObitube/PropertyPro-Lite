import properties from '../database/property';
import users from '../database/user';

class Property {
  postAd(data) {
    const newAd = {
      id: properties.length + 1,
      owner: users[users.length - 1].id,
      email: users[users.length - 1].email,
      status: 'available',
      price: JSON.parse(10000),
      state: data.state,
      city: data.city,
      address: data.address,
      type: data.type,
      created_on: Date(),
      image_url: data.image_url,
    };
    properties.push(newAd);
    return newAd;
  }

  getAllProperty() {
    return properties;
  }

  getSpecificProperty(id) {
    const specificProperty = properties.find(property => property.id === id);
    return specificProperty;
  }

}

export default new Property();
