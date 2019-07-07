import property from '../database/property';
import users from '../database/user';

class Property {
  postAd(data) {
    const newAd = {
      id: property.length + 1,
      owner: users[users.length - 1].id,
      email: users[users.length - 1].email,
      created_on: Date(),
      state: data.state,
      status: 'available',
      price: JSON.parse(10000),
      city: data.city,
      address: data.address,
      type: data.type,
      image_url: data.image_url,
    };
    property.push(newAd);
    return newAd;
  }
}

export default new Property();
