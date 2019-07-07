import property from '../database/property';
import users from '../database/user';

class Property {
  postAd(data) {
    const newAd = {
      id: property.length + 1,
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
    property.push(newAd);
    return newAd;
  }

  getAllProperty() {
    return property;
  }
}

export default new Property();
