"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const Koa = require("koa");
const app = new Koa();
function hello(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        ctx.body = "hello";
    });
}
// app.use(async (ctx) => {
// });
app.use(hello);
const port = process.env.PORT || 8000;
app.listen(port);
console.log(`running on port ${port}`);
