import * as Koa from "koa";

const app = new Koa();

async function hello(ctx: Koa.Context): Promise<void> {
   ctx.body = "hello"; 
}

// app.use(async (ctx) => {
// });

app.use(hello);

const port = process.env.PORT || 8000;

app.listen(port);
console.log(`running on port ${port}`);