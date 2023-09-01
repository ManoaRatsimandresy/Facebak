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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveReaction = exports.deleteReaction = exports.getReactionById = exports.getPostReactions = void 0;
var db_1 = require("../../lib/db");
var error_1 = require("../../util/error");
var service_1 = require("../post/service");
var service_2 = require("../user/service");
var getPostReactions = function (postId) { return __awaiter(void 0, void 0, void 0, function () {
    var post;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, service_1.getPostById)(postId)];
            case 1:
                post = _a.sent();
                return [2 /*return*/, db_1.prisma.reaction.findMany({
                        where: {
                            postId: post.id,
                        },
                    })];
        }
    });
}); };
exports.getPostReactions = getPostReactions;
var getReactionById = function (userId, postId) { return __awaiter(void 0, void 0, void 0, function () {
    var reaction;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.prisma.reaction.findUnique({
                    where: {
                        userId_postId: {
                            userId: userId,
                            postId: postId,
                        },
                    },
                })];
            case 1:
                reaction = _a.sent();
                if (!reaction) {
                    throw (0, error_1.notFoundError)("Reaction", "userId_postId", "".concat(userId, "-").concat(postId));
                }
                return [2 /*return*/, reaction];
        }
    });
}); };
exports.getReactionById = getReactionById;
var deleteReaction = function (data, postId) { return __awaiter(void 0, void 0, void 0, function () {
    var post, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, service_1.getPostById)(postId)];
            case 1:
                post = _a.sent();
                return [4 /*yield*/, (0, service_2.getUserById)(data.userId)];
            case 2:
                user = _a.sent();
                return [4 /*yield*/, (0, exports.getReactionById)(user.id, post.id)];
            case 3:
                _a.sent();
                return [2 /*return*/, db_1.prisma.reaction.delete({
                        where: {
                            userId_postId: {
                                userId: user.id,
                                postId: post.id,
                            },
                        },
                    })];
        }
    });
}); };
exports.deleteReaction = deleteReaction;
var saveReaction = function (data, postId) { return __awaiter(void 0, void 0, void 0, function () {
    var user, post, reaction;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, service_2.getUserById)(data.userId)];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, (0, service_1.getPostById)(postId)];
            case 2:
                post = _a.sent();
                reaction = __assign(__assign({}, data), { postId: post.id, userId: user.id });
                return [2 /*return*/, db_1.prisma.reaction.upsert({
                        where: {
                            userId_postId: {
                                userId: user.id,
                                postId: post.id,
                            },
                        },
                        create: reaction,
                        update: reaction,
                    })];
        }
    });
}); };
exports.saveReaction = saveReaction;
