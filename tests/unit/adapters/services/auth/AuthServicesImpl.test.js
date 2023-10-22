const { authServices } = require('../../../../../container');
const loginSchema = require('../../../../../src/validations/auth/loginSchema');

describe('AuthServicesImpl', () => {
    describe('validation', () => {
        it('should return null', () => {
            const data = {
                email: 'test@test.com',
                password: '12345678'
            }
            const validationError = authServices.validateData(data, loginSchema);
            expect(validationError).toBeNull();
        });

        it('should return validation error', () => {
            const data = {
                email: 'test',
                password: '12345678'
            };
            const validationError = authServices.validateData(data, loginSchema);
            expect(validationError).toEqual({
                status: 400,
                validationError: {
                    field: 'email',
                    message: '"email" must be a valid email'
                }
            });
        });
    });

    describe('hashPassword', () => {
        it('should return hashed password', async () => {
            const hashedPassword = await authServices.hashPassword('12345678');
            expect(hashedPassword).not.toEqual('12345678');
        });
    });

    describe('comparePassword', () => {
        it('should return true', async () => {
            const hashedPassword = await authServices.hashPassword('12345678');
            const isMatch = await authServices.comparePassword('12345678', hashedPassword);
            expect(isMatch).toBeTruthy();
        });
    });
});