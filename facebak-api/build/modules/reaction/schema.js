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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reaction = void 0;
var zod_1 = require("zod");
var common = {
    userId: zod_1.z.string(),
};
var reactionInputDto = zod_1.z.object(__assign(__assign({}, common), { type: zod_1.z.enum(["LIKE", "DISLIKE"]) }));
var reactionDeleteDto = zod_1.z.object(common);
exports.Reaction = {
    reactionInputDto: reactionInputDto,
    reactionDeleteDto: reactionDeleteDto,
};
