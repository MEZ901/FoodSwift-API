const register = require('../../../../../src/application/usecases/auth/register');
const registerSchema = require('../../../../../src/validations/auth/registerSchema');
const Joi = require("joi");

// Mock dependencies and services
const userData = {
    firstName: "John",
    lastName: "Doe",
    email: "test@test.com",
    password: "test1234",
};

const authServices = {
    validateData: jest.fn((data, schema) => {
        return null;
    }),
    hashPassword: jest.fn(async (password) => {
        return "hashed_password";
    }),
};

const userRepository = {
    findByEmail: jest.fn(async (email) => {
        return null;
    }),
    create: jest.fn(async (userData) => {
        return { ...userData, _id: "mockedUserId" };
    }),
};

describe("register function", () => {
    it("should successfully register a user", async () => {
        const result = await register({
            userData,
            registerSchema,
            authServices,
            userRepository,
        });

        expect(result).toEqual({
            status: 200,
            message: "User created successfully",
            user: { ...userData, _id: "mockedUserId" },
        });
    });

    it("should handle validation errors", async () => {
        userData.email = "";

        const result = await register({
            userData,
            registerSchema,
            authServices,
            userRepository,
        });

        expect(result).toEqual({
            status: 400,
            validationError: {
                field: "email",
                message: '"email" is not allowed to be empty',
            },
        });
    });

    it("should handle existing email", async () => {
        userRepository.findByEmail = jest.fn(async (email) => {
            return { ...userData, _id: "mockedUserId" };
        });

        const result = await register({
            userData,
            registerSchema,
            authServices,
            userRepository,
        });

        expect(result).toEqual({
            status: 400,
            validationError: {
                field: "email",
                message: "Email already exists",
            },
        });
    });

    it("should handle user creation failure", async () => {
        userRepository.create = jest.fn(async (userData) => {
            return null;
        });

        const result = await register({
            userData,
            registerSchema,
            authServices,
            userRepository,
        });

        expect(result).toEqual({
            status: 400,
            message: "User could not be created",
        });
    });
});
