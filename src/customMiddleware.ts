import Koa from "koa";

type middleware = (ctx: Koa.Context, next: Function) => Promise<void>;

export function errorHandling(options: any): middleware {
    return async (ctx: Koa.Context, next: Function) => {
        try {
            await next();
        }

        catch (err) {
            if (options.sendEmail) {
                //send email
            }

            console.error(err);

            ctx.status = err.status || 500;
            ctx.message = err.message || "Oh no!";
        }
    }
}