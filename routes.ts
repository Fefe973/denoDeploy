import {Router} from "https://deno.land/x/oak@v17.1.1/mod.ts";
import {getLandingPage} from "./controllers/getPages.ts";

import { oakCors } from "https://deno.land/x/cors/mod.ts";


const router = new Router();

router.get('/',getLandingPage);
router.get('/otherpage',getOtherPage);




export default router
