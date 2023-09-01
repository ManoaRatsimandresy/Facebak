"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var zod_1 = __importDefault(require("zod"));
var postDto = zod_1.default.object({
    id: zod_1.default.string().uuid().optional(),
    content: zod_1.default.string().nonempty(),
    title: zod_1.default.string().optional(),
    userId: zod_1.default.string().uuid(),
});
exports.Post = {
    postDto: postDto,
};
