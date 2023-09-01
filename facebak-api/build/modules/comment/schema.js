"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.commentDto = void 0;
var zod_1 = __importDefault(require("zod"));
exports.commentDto = zod_1.default.object({
    content: zod_1.default.string(),
    userId: zod_1.default.string().uuid(),
    id: zod_1.default.string().uuid().optional(),
});
exports.Comment = {
    commentDto: exports.commentDto,
};
