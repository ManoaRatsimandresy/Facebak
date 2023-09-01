"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.loginUserDto = exports.updateUserDto = exports.createUserDto = exports.commonFields = void 0;
var zod_1 = __importDefault(require("zod"));
exports.commonFields = {
    bio: zod_1.default.string().optional(),
    photo: zod_1.default.string().optional(),
    password: zod_1.default.string().min(8),
};
exports.createUserDto = zod_1.default.object(__assign(__assign({}, exports.commonFields), { email: zod_1.default.string().email(), username: zod_1.default.string().min(5).max(50), confirmPassword: zod_1.default.string().min(8) }));
exports.updateUserDto = zod_1.default.object(__assign(__assign({}, exports.commonFields), { email: zod_1.default.string().email(), username: zod_1.default.string().min(5).max(50).optional(), newPassword: zod_1.default.string().min(8).optional(), confirmNewPassword: zod_1.default.string().min(8).optional() }));
exports.loginUserDto = zod_1.default.object({
    username: zod_1.default.string(),
    password: zod_1.default.string(),
    email: zod_1.default.string().email(),
});
exports.User = {
    createUserDto: exports.createUserDto,
    updateUserDto: exports.updateUserDto,
    loginUserDto: exports.loginUserDto,
};
