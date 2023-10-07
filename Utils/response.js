
const SuccessResponse = (data) => {
    return {
        statusCode: 200,
        data: data
    }
}

const ErrorResponse = (error) => {
    return {
        statusCode: 500,
        error: error
    }
}

module.exports = {
    SuccessResponse,
    ErrorResponse
}