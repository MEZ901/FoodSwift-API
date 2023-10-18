class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async createMany(data) {
    return await this.model.insertMany(data);
  }

  async findById(id) {
    return await this.model.findById(id);
  }

  async find(conditions = {}) {
    return await this.model.find(conditions);
  }

  async update(id, data) {
    return await this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;
