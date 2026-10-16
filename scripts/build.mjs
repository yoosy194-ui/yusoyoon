import {mkdir,readFile,writeFile,cp,rename,rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
export const root=fileURLToPath(new URL('../',import.meta.url));
export async function build(){
 const data=JSON.parse(await readFile(new URL('../src/data/portfolio.json',import.meta.url),'utf8'));
 const template=await readFile(new URL('../src/index.html',import.meta.url),'utf8');
 const serialized=JSON.stringify(data).replace(/</g,'\\u003c');
 const html=template.replace('__PORTFOLIO_DATA__',()=>serialized);
 const out=new URL('../dist/',import.meta.url);await mkdir(out,{recursive:true});
 await cp(new URL('../src/styles/',import.meta.url),new URL('styles/',out),{recursive:true});
 await cp(new URL('../src/scripts/',import.meta.url),new URL('scripts/',out),{recursive:true});
 await writeFile(new URL('index.html',out),html);
 // A standalone public artifact is used by the local editor and can also be hosted.
 const css=await readFile(new URL('../src/styles/main.css',import.meta.url),'utf8');
 const js=await readFile(new URL('../src/scripts/main.js',import.meta.url),'utf8');
 const standalone=html.replace('<link rel="stylesheet" href="./styles/main.css">',()=>'<style>'+css+'</style>').replace('<script src="./scripts/main.js" defer></script>',()=>'<script>'+js+'</script>');
 await writeFile(new URL('portfolio.html',out),standalone);
 console.log('Built dist/ (public files only).');return standalone;
}
if(process.argv[1]===fileURLToPath(import.meta.url))await build();
