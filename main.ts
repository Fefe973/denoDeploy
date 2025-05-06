import { Application} from "https://deno.land/x/oak@v17.1.1/mod.ts";
import { send } from "https://deno.land/x/oak@v17.1.1/send.ts";
import { viewEngine, ejsEngine, oakAdapter } from "https://deno.land/x/view_engine@v10.5.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import Stripe from "https://esm.sh/stripe?target=deno";
import router from './routes.ts';








const port = Deno.env.get("PORT") || 92

const app = new Application()

app.use(viewEngine(oakAdapter, ejsEngine));


app.use(oakCors({
  origin: 'http://localhost:92',
  optionsSuccessStatus: 200,
  /*methods: ['GET', 'PUT', 'POST'],
  allowedHeaders: ['Authorization', 'X-WP-Nonce', 'Content-Disposition', 'Content-MD5', 'Content-Type'],
  exposedHeaders: ['X-WP-Total', 'X-WP-TotalPages', 'Link'],
  credentials: true,
  preflightContinue: true,*/

}));



app.use(router.routes());
app.use(router.allowedMethods());

app.use(async(ctx,next) => {
  await send(ctx,ctx.request.url.pathname,{
      root: `${Deno.cwd()}`
  });
  next();
});




// Define a POST webhook route

//certFile: "./sites/vainastar.com/vainastar.com-2023-03-27.crt", keyFile:"./sites/vainastar.com/vainastar.com-2023-03-27.key", alpnProtocols: ["h2", "http/1.1"],secure:true


try{
  console.log(`Server running on port ${port}`);
  await app.listen({port});
  
}catch(e) {
  console.log(" *** there is an error ***");
  console.log(e);
};

//deno run --allow-net --allow-read --allow-env --unstable main.ts
//denon run --allow-net --allow-read --allow-env --unstable server.ts
//deno run --allow-all --node-modules-dir server.ts
