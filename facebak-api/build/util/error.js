"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conflictError = exports.unauthorizedError = exports.badRequestError = exports.notFoundError = exports.HttpErrorCodes = void 0;
exports.HttpErrorCodes = {
    404: "Not Found",
    401: "Unauthorized",
    400: "Bad Request",
    409: "Conflict",
};
var createHttpError = function (statusCode, message) {
    return {
        statusCode: statusCode,
        message: message,
        error: exports.HttpErrorCodes[statusCode],
    };
};
function notFoundError(messageOrResource, field, value) {
    // ...field argument is provided!, it matches the 2nd overload, with 'resource
    if (field) {
        var message = "".concat(messageOrResource, ".").concat(field, "=").concat(value, " is not found.");
        return createHttpError(404, message);
    }
    return createHttpError(404, messageOrResource);
}
exports.notFoundError = notFoundError;
var badRequestError = function (message) {
    return createHttpError(400, message);
};
exports.badRequestError = badRequestError;
var unauthorizedError = function (message) {
    return createHttpError(401, message);
};
exports.unauthorizedError = unauthorizedError;
var conflictError = function (message) {
    return createHttpError(409, message);
};
exports.conflictError = conflictError;
