const BaseRepositoryInterface = require("../../application/interfaces/repositories/BaseRepositoryInterface");

class BaseRepositoryImpl extends BaseRepositoryInterface {
  constructor(model) {
    super();
    this.model = model;
  }

  create = async (data) => {
    return await this.model.create(data);
  };

  createMany = async (data) => {
    return await this.model.insertMany(data);
  };

  findById = async (id, includeDeleted = false) => {
    const query = includeDeleted ? { _id: id } : { _id: id, isDeleted: false };
    return await this.model.findOne(query);
  };

  find = async (conditions = {}, includeDeleted = false) => {
    const query = includeDeleted
      ? conditions
      : { ...conditions, isDeleted: false };
    return await this.model.find(query);
  };

  update = async (id, data) => {
    const existingDoc = await this.findById(id);
    if (existingDoc) {
      data.updatedAt = new Date();
      return await this.model.findByIdAndUpdate(id, data, { new: true });
    } else {
      throw new Error("Document not found or soft-deleted.");
    }
  };

  softDelete = async (id) => {
    return await this.model.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
  };

  forceDelete = async (id) => {
    return await this.model.findByIdAndDelete(id);
  };
}

module.exports = BaseRepositoryImpl;
