// el node run time mkwn mn el v8 engine m3 el libuv, wele rabt bnhom fel code hwa el node bindings
//el node 3aml javascript modules 3adya 3shan n3rf  nst5dmha (lib folder), w gwaha bystd3e functions el libuv (src folder), 3n tre el bindings.

//el event loop bykon tb3 el main thread w bykon gwa el libuv, w hwa fe 7agat bywdeha tthandle ll os w dah bykon 27sn w 2shl blnsbalo (zy el http module), w 7agat bywdeha ll thread pool fl libuv (zy el filesystem).

/* 
from offical node docs
File modules#
If the exact filename is not found, then Node.js will attempt to load the required filename with the added extensions: .js, .json, and finally .node. When loading a file that has a different extension (e.g. .cjs), its full name must be passed to require(), including its file extension (e.g. require('./file.cjs')).

.json files are parsed as JSON text files, .node files are interpreted as compiled addon modules loaded with process.dlopen(). Files using any other extension (or no extension at all) are parsed as JavaScript text files. Refer to the Determining module system section to understand what parse goal will be used.

A required module prefixed with '/' is an absolute path to the file. For example, require('/home/marco/foo.js') will load the file at /home/marco/foo.js.

A required module prefixed with './' is relative to the file calling require(). That is, circle.js must be in the same directory as foo.js for require('./circle') to find it.

Without a leading '/', './', or '../' to indicate a file, the module must either be a core module or is loaded from a node_modules folder.

If the given path does not exist, require() will throw a MODULE_NOT_FOUND error.
*/

//lw hst5dm el ecmascript modules, s3tha lazm 27pt el file extensions.

// node by3ml cashe ll modules ele 3mlha require abl kda, w lw 3mlt require tany lnfs el module fe nfs el file 2w files mo5tlfa, s3tha lw la2a fl cashe msh hynfzo hyrg3 el 7aga ele 3mlha export bs. wel cashe dah bykon mwgod global fe require.cashe object, w dah bykon fehproperty esmha loaded l kol module, by2ol hal et3mlo load 2bl kda wala la2

// 3lamet el carrot(^) bt5lee el npm lma ygy 23ml download ynzl 25er update 7asl, bs ka minor bs msh major, y3ny lw 1.2 ynzl 1.2.4 1.4 1.8 lakn msh 2 wala moshtqtha, ela fe 7alt lw 3nde version 0.x s3tha el minor hyt3aml en hwa el major, y3ny lw 3nde msln 0.8 moomkn ynzl 0.8.1 0.8.3 lakn msh 0.9 wala moshtqtha

//lw ms7t el packgejason.lock, w b3d kda 3mlt npm install, w kan 3nde liberary msln ^1.2.3, w kant fel packgejason.lock nfs el kalam, w kan nzl update ll mktba, s3tha hla2e eno hynzl el update el gded 3shan ms7t ile el lock, bs msh hyt8yr fl packge.json el 2sly el version el gded, w dah moomkn y3ml confusion.

//req and res in http.createServer are streams, where req is readable stream, and res is a writable stream. actually http.createServer is a event emitter, where we can do this =>
/* 
const server = http.createServer();
server.on('request',(req,res)=>{}) 
 */

//lma bkon 3aml middleware, express by6osh feha l7ad ma yla2e nex yro7 da5l 3ala ele b3dha, bs b3d ma y5ls brg3 tany ykml mn b3d next, y3ny el function msh btb2a 3mlt return 8er lma ana 2a2olha.

// __dirname is a variable in the node, global built-ins to get the path of the folder where the current file we are in.

// sendfile takes a absolute path
// express.static take relative path, where its relative to the folder you start your app from, so its better to give it absolute path to avoid errors
