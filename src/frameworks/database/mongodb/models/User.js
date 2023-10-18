const { Schema, model, models } = require("../mongoose");

const userSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  image: {
    type: String,
    default: null,
  },
  phoneNumber: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "Role",
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const User = models.User || model("User", userSchema);

module.exports = User;
