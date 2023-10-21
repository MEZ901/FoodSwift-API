const { Schema, model, models } = require("../mongoose");

const userTokenSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  isDeleted: {
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
    exp: 60 * 60 * 24 * 7, // 7 days
    required: true,
  },
});

const UserToken = models.UserToken || model("UserToken", userTokenSchema);

module.exports = UserToken;
