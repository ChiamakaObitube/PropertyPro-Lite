import properties from '../database/property';
import users from '../database/user';

class Property {
  postAd(data) {
    const newAd = {
      id: properties.length + 1,
      owner: users[users.length - 1].id,
      owner_email: users[users.length - 1].email,
      owner_phone_number: users[users.length - 1].phone_number,
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

  deleteOneProperty(id) {
    const specificProperty = properties.find(property => property.id === id);

    const index = properties.indexOf(specificProperty);
    properties.splice(index, 1);
    return specificproperty;
  }

}

export default new Property();
