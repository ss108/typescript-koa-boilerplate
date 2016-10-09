import * as Koa from "koa";

import WidgetsAPIController from "./controllers/WidgetsAPIController";

const app = new Koa();

// async function hello(ctx: Koa.Context): Promise<void> {
//    ctx.body = "hello"; 
// }

// app.use(hello);
app.use(WidgetsAPIController.routes()).use(WidgetsAPIController.allowedMethods());

const port = process.env.PORT || 8000;

app.listen(port);
console.log(`running on port ${port}`);