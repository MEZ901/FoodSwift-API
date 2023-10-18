const { Schema, model, models } = require("../mongoose");

const roleSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Role = models.Role || model("Role", roleSchema);

module.exports = Role;
