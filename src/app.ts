import * as Koa from "koa";

import WidgetsAPIController from "./controllers/WidgetsAPIController";
import {errorHandler} from "./customMiddleware";

const app = new Koa();

app.use(errorHandler({defaultMessage: "Oh no!"}));

app.use(WidgetsAPIController.routes()).use(WidgetsAPIController.allowedMethods());

const port = process.env.PORT || 8000;

app.listen(port);
console.log(`running on port ${port}`);