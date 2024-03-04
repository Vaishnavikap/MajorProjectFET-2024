const createSuccess = (statusCode, successMessage) => {
    const successObj = {
        status: statusCode,
        message: successMessage
    };
    return JSON.stringify(successObj);
};

module.exports = { createSuccess };
