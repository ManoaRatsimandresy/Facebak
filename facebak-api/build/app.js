"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var app = (0, server_1.buildServer)();
var options = {
    port: Number(process.env.PORT || 8080),
};
app.listen(options, function (err, addr) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log("Server running at", addr);
});
