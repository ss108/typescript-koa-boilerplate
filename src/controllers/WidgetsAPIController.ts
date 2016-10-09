import * as Koa from "koa";
import * as Router from 'koa-router';
import * as fs from "fs";
import * as path from "path";

/*In lieu of logic and data layers*/
function _getAll(): any[] {
    let filePath: string = path.join(__dirname, "..", "..", "widgets.json");
    let rawFile: string = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(rawFile);
}

async function getAll(ctx: Koa.Context) : Promise<void> {
    let all: any[] = _getAll();
    ctx.body = all;
}

const router = new Router({prefix: '/api/widgets'});
router.get('/', getAll);

export default router;