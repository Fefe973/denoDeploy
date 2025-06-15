import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import "https://deno.land/x/dotenv/load.ts";
import Stripe from "https://esm.sh/stripe?target=deno";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { DOMParser, initParser } from "jsr:@b-fuze/deno-dom/wasm-noinit";
import { HTMLTemplateElement } from "https://deno.land/x/deno_dom@v0.1.48/deno-dom-wasm.ts";
import { DocumentFragment } from "https://deno.land/x/deno_dom@v0.1.48/deno-dom-wasm.ts";







const getLandingPage = async(ctx:any)=>{
    console.log('---getLandingPage function---');
    try{
        ctx.render('./landingpage/landingpage.ejs');
    }catch(e){
        console.log(`Error on getLandingPage function : ${e}`);
    }finally{

    }
}

const getOtherPage = async(ctx:any)=>{
    console.log('---getOtherPage function---');
    try{
        ctx.render('./otherpage/otherpage.ejs');
    }catch(e){
        console.log(`Error on getLandingPage function : ${e}`);
    }finally{

    }
}




export {getLandingPage,getOtherPage}
