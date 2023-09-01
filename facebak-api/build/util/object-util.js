"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omit = void 0;
function omit(obj, keys) {
    return Object.keys(obj).reduce(function (o, key) {
        if (!keys.includes(key)) {
            o[key] = obj[key];
        }
        return o;
    }, {});
}
exports.omit = omit;
