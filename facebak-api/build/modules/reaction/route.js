"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactionRoutes = void 0;
var controller_1 = require("./controller");
var shared_1 = require("../shared");
var reactionRoutes = function (server, _, done) {
    server.get("/posts/:pid/reactions", controller_1.getPostReactionsHandler);
    server.post("/posts/:pid/reactions", {
        preHandler: [server.authenticate],
        schema: {
            body: (0, shared_1.$ref)("reactionInputDto"),
        },
    }, controller_1.saveReactionHandler);
    server.delete("/posts/:pid/reactions", {
        preHandler: [server.authenticate],
        schema: {
            body: (0, shared_1.$ref)("reactionDeleteDto"),
        },
    }, controller_1.deleteReactionHandler);
    done();
};
exports.reactionRoutes = reactionRoutes;
