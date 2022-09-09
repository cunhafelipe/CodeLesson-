const User = require('../models/User');

module.exports = {
  async Create(request, response) {
    const createUser = await User.create(request.body);
    return response.json(createUser);
  },
  async Read(request, response) {
    const findUser = await User.findById(request.params.id);
    return response.json(findUser);
  },
  async FindAll (_request, response) {
    const findAll = await User.find();
    return await response.json(findAll);
  },
  async Update(request, response) {
    const update = await User.findByIdAndUpdate(request.params.id, request.body)  
    return response.json(update);
  },
  async Delete(request, response) {
    const deleteUser = await User.findByIdAndDelete(request.params.id);
    return response.json({
      succes: true,
      message: 'Usuario deletado com sucesso',
      deleteUser,
    });
  },

  async FilterUsers (_request, response) {
    const user = await User.find();
    const filterData = user.filter();
    return response.json(filterData)

  }
};
