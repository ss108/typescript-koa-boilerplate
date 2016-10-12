import Koa from "koa";

type middleware = (ctx: Koa.Context, next: Function) => Promise<void>;

export function errorHandler(options: {sendEmail?: boolean, defaultMessage: string}): middleware {
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
            ctx.message = err.message || options.defaultMessage; 
        }
    }
}