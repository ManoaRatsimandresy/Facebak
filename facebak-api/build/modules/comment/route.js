"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRoutes = void 0;
var controller_1 = require("./controller");
var shared_1 = require("../shared");
var commentRoutes = function (server, _, done) {
    server.put("/posts/:pid/comments", {
        preHandler: [server.authenticate],
        schema: {
            body: (0, shared_1.$ref)("commentDto"),
        },
    }, controller_1.saveCommentHandler);
    server.get("/posts/:pid/comments", {
        preHandler: [server.authenticate],
    }, controller_1.getCommentByPostIdHandler);
    done();
};
exports.commentRoutes = commentRoutes;
