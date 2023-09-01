"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = void 0;
var controller_1 = require("./controller");
var shared_1 = require("../shared");
var postRoutes = function (server, _, done) {
    server.get("/posts", {
        preHandler: [server.authenticate],
    }, controller_1.getPostsHandler);
    server.put("/posts", {
        preHandler: [server.authenticate],
        schema: {
            body: (0, shared_1.$ref)("postDto"),
        },
    }, controller_1.savePostHandler);
    server.get("/posts/:id", {
        preHandler: [server.authenticate],
    }, controller_1.getPostByIdHandler);
    done();
};
exports.postRoutes = postRoutes;
