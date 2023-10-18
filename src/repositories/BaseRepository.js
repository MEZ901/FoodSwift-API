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

  async findById(id, includeDeleted = false) {
    const query = includeDeleted ? { _id: id } : { _id: id, isDeleted: false };
    return await this.model.findOne(query);
  }

  async find(conditions = {}, includeDeleted = false) {
    const query = includeDeleted
      ? conditions
      : { ...conditions, isDeleted: false };
    return await this.model.find(query);
  }

  async update(id, data) {
    const existingDoc = await this.findById(id);
    if (existingDoc) {
      data.updatedAt = new Date();
      return await this.model.findByIdAndUpdate(id, data, { new: true });
    } else {
      throw new Error("Document not found or soft-deleted.");
    }
  }

  async softDelete(id) {
    return await this.model.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
  }

  async forceDelete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;
