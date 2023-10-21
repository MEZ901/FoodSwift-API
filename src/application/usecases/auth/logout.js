const {createLogger} = require("winston");
module.exports = async ({
    refreshToken,
    refreshTokenSchema,
    authServices,
    userTokenRepository,
}) => {
    const validationError = authServices.validateData(
        { refreshToken },
        refreshTokenSchema
    );
    if (validationError) return validationError;

    const decodedToken = await authServices.verifyRefreshToken(refreshToken);

    const userToken = await userTokenRepository.find({ refreshToken });
    if (userToken.length === 0) {
        return {
            status: 400,
            validationError: {
                field: "refreshToken",
                message: "Refresh token does not exist",
            }
        }
    }

    const deletedToken = await userTokenRepository.softDelete(userToken[0]._id);
    if (!deletedToken) {
        return {
            status: 400,
            validationError: {
                field: "refreshToken",
                message: "Refresh token does not exist",
            }
        }
    }

    return {
        status: 200,
        message: "Logout successful",
    }
};