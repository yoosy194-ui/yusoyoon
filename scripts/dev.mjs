import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {build} from './build.mjs';
await build();
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
const port=Number(process.env.PORT||4173);
http.createServer(async(req,res)=>{
 try{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);return res.end();}
  const route=new URL(req.url,'http://localhost').pathname;
  const files={'/':'dist/index.html','/index.html':'dist/index.html','/portfolio.html':'dist/portfolio.html','/styles/main.css':'dist/styles/main.css','/scripts/main.js':'dist/scripts/main.js','/editor.html':'tools/editor.html'};
  if(!files[route]){res.writeHead(404);return res.end('Not found');}
  let contents=await readFile(new URL('../'+files[route],import.meta.url));
  if(route==='/editor.html')contents=Buffer.from(contents.toString().replace("fetch('./index.html')","fetch('./portfolio.html')"));
  const ext=route.split('.').pop();res.writeHead(200,{'Content-Type':types['.'+ext]||types['.html'],'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:contents);
 }catch{res.writeHead(500);res.end('Unable to serve page. Run npm run build and check the source files.');}
}).listen(port,'127.0.0.1',()=>console.log(`Portfolio: http://127.0.0.1:${port}\nLocal editor: http://127.0.0.1:${port}/editor.html`));
