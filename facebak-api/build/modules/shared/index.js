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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ref = exports.schemas = void 0;
var fastify_zod_1 = require("fastify-zod");
var schema_1 = require("../comment/schema");
var schema_2 = require("../post/schema");
var schema_3 = require("../user/schema");
var schema_4 = require("../reaction/schema");
exports.schemas = (_a = (0, fastify_zod_1.buildJsonSchemas)(__assign(__assign(__assign(__assign({}, schema_1.Comment), schema_2.Post), schema_3.User), schema_4.Reaction)), _a.schemas), exports.$ref = _a.$ref;
