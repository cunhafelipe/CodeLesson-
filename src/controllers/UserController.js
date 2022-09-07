const User = require('../models/User');

module.exports = {
  async Create(request, response) {
    const createUser = await User.create(request.body);
    return response.json(createUser);
  },
  async Read(request, response) {
    const findUser = await User.findById(request.params._id);
    return response.json(findUser);
  },
  async FindByEmail (request, response) {
    const findUserByEmail = await User.findOne(request.params.email);
    return response.json(findUserByEmail);
  },
  async Update(request, response, body) {
    const convert = User.findByIdAndUpdate(request.params._id, {
        email: 'fred@desempedidos.com'
    })
    return JSON.stringify(convert);
  },
  async Delete(request, response) {
    const deleteUser = User.findByIdAndDelete(request.params.id);
    return deleteUser;
  },
};
