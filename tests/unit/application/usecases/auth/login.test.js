// Import necessary dependencies and the function to be tested
const loginUser = require("../../../../../src/application/usecases/auth/login");
const Joi = require("joi");

const userData = {
    email: "test@example.com",
    password: "password123",
};

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const authServices = {
    validateData: jest.fn((data, schema) => {
        return null; // Mocking a successful validation
    }),

    comparePassword: jest.fn(async (password, hashedPassword) => {
        return password === "password123" && hashedPassword === "mocked_hashed_password";
    }),

    generateAccessToken: jest.fn(async (payload) => {
        return "mocked_access_token";
    }),

    generateRefreshToken: jest.fn(async (payload) => {
        return "mocked_refresh_token";
    }),
};

const userRepository = {
    findByEmail: jest.fn(async (email) => {
        return { ...userData, password: "mocked_hashed_password" }; // Mock that the email exists
    }),
};

const userTokenRepository = {
    find: jest.fn(async (query) => {
            return []; // Mock that no user tokens were found
        }),

    update: jest.fn(async (id, data) => {
        // Mock the update operation
    }),

    create: jest.fn(async (data) => {
        // Mock the create operation
    }),
};

describe("loginUser function", () => {
    it("should successfully log in a user", async () => {
        const result = await loginUser({
            userData,
            loginSchema,
            authServices,
            userRepository,
            userTokenRepository,
        });

        expect(result).toEqual({
            status: 200,
            message: "User logged in successfully",
            jwt: {
                accessToken: "mocked_access_token",
                refreshToken: "mocked_refresh_token",
            },
        });
    });

    it("should handle validation errors", async () => {
        // Modify the userData or schema to make validation fail

        const result = await loginUser({
            userData,
            loginSchema,
            authServices,
            userRepository,
            userTokenRepository,
        });

        expect(result).toEqual({
            status: 400,
            validationError: {
                field: expect.any(String), // Field name
                message: expect.any(String), // Error message
            },
        });
    });

    it("should handle non-existent email", async () => {
        userRepository.findByEmail = jest.fn(async (email) => {
            return null; // Mock that the email does not exist
        });

        const result = await loginUser({
            userData,
            loginSchema,
            authServices,
            userRepository,
            userTokenRepository,
        });

        expect(result).toEqual({
            status: 400,
            validationError: {
                field: "email",
                message: "Email does not exist",
            },
        });
    });

    it("should handle incorrect password", async () => {
        // Modify the password in the userData or the hashed password in the mock

        const result = await loginUser({
            userData,
            loginSchema,
            authServices,
            userRepository,
            userTokenRepository,
        });

        expect(result).toEqual({
            status: 400,
            validationError: {
                field: "password",
                message: "Password is incorrect",
            },
        });
    });

    it("should handle user token update", async () => {
        userTokenRepository.find = jest.fn(async (query) => {
            return [{ _id: "mockedUserTokenId" }]; // Mock that a user token was found
        });

        const result = await loginUser({
            userData,
            loginSchema,
            authServices,
            userRepository,
            userTokenRepository,
        });

        // Make assertions based on user token update
    });

    it("should handle user token creation", async () => {
        userTokenRepository.find = jest.fn(async (query) => {
            return []; // Mock that no user tokens were found
        });

        const result = await loginUser({
            userData,
            loginSchema,
            authServices,
            userRepository,
            userTokenRepository,
        });

        // Make assertions based on user token creation
    });
});
