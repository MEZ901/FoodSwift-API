class User {
  constructor({
    id,
    name,
    email,
    password,
    image,
    phoneNumber,
    address,
    role,
    isVerified,
    createdAt,
    updatedAt,
    isDeleted,
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.image = image;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.role = role;
    this.isVerified = isVerified;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isDeleted = isDeleted;
  }
}
