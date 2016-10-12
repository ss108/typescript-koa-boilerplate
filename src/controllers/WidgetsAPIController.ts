import * as Koa from "koa";
import * as Router from 'koa-router';
import * as fs from "fs";
import * as path from "path";
import { plainToClass } from "class-transformer";

import Widget from "../models/widget";

/*In lieu of logic and data layers*/
function _getAll(): Widget[] {
    let filePath: string = path.join(__dirname, "..", "..", "widgets.json");
    let rawFile: string = fs.readFileSync(filePath, 'utf8');
    let objects: any[] = JSON.parse(rawFile);
    return plainToClass(Widget, objects);
}

async function getAll(ctx: Koa.Context): Promise<void> {
    let all: Widget[] = _getAll();
    ctx.body = all;
}

async function get(ctx): Promise<void> {
    let all: Widget[] = _getAll();
    let id: number = Number(ctx.params.id); //everything koa-router puts on ctx.params is a string

    let widget: Widget = all.filter((w) => {
        return w.id === id;
    })[0];

    ctx.body = widget;
}


const router = new Router({ prefix: '/api/widgets' });

router.get('/', getAll);
router.get('/:id', get);

export default router;