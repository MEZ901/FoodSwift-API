/**
 * @interface
 */
class BaseRepository {
  constructor() {
    if (this.constructor === BaseRepository) {
      throw new Error(
        "BaseRepository is an interface and cannot be instantiated."
      );
    }
  }

  /**
   * create a new document
   * @param {Object} data - Data to create a new document
   * @returns {Promise<Object>} - Promise that resolves to the created document
   */
  async create(data) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * create many new documents
   * @param {Object} data - Data to create many new documents
   * @returns {Promise<Object>} - Promise that resolves to the created documents
   */
  async createMany(data) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * find a document by ID
   * @param {Number} id - ID of the document to find
   * @param {Boolean} includeDeleted - Whether to include soft-deleted documents
   * @returns {Promise<Object>} - Promise that resolves to the found document
   */
  async findById(id, includeDeleted = false) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * find documents by conditions
   * @param {Object} conditions - Conditions to find documents by
   * @param {Boolean} includeDeleted - Whether to include soft-deleted documents
   * @returns {Promise<Object>} - Promise that resolves to the found documents
   */
  async find(conditions = {}, includeDeleted = false) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * update a document
   * @param {Number} id - ID of the document to update
   * @param {Object} data - Data to update the document with
   * @returns {Promise<Object>} - Promise that resolves to the updated document
   */
  async update(id, data) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * soft-delete a document
   * @param {Number} id - ID of the document to soft-delete
   * @returns {Promise<Object>} - Promise that resolves to the soft-deleted document
   */
  async softDelete(id) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * force-delete a document
   * @param {Number} id - ID of the document to force-delete
   * @returns {Promise<Object>} - Promise that resolves to the deleted document
   */
  async forceDelete(id) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = BaseRepository;
