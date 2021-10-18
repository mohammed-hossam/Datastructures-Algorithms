//* multiply function with addtion only:
/* function mult(a, b) {
  let finalNum = 0;

  for (let i = 0; i < b; i++) {
    finalNum = finalNum + a;
    console.log(finalNum);
  }
}
mult(3, 4); */

//* spread operator:
// let myobj = { name: 'mohamed', age: '43' };

// function memo1() {
//   return myobj;
// }

// function memo2() {
//   return { ...myobj };
// }
// console.log(memo1());
// console.log(memo2());

//* callback functions:
// let callback = function () {
//   console.log(2);
//   return {
//     num: 3,
//     name: 'mohamed',
//     namo: () => {
//       console.log('tamaam');
//     },
//   };
// };
// let then = function (callback) {
//   callback();
//   return {
//     memo: () => {
//       console.log('heya dee');
//     },
//   };
// };

// const z = then(callback);
// z.memo();

// function fetch() {
//   return {
//     method: () => {
//       console.log('mmmm');
//     },
//     age: 33,
//   };
// }
// console.log(fetch().age);

// const ff = fetch();
// console.log(ff.method)

/* -------------------------------------------------------------------------- */
/*                                  promises                                  */
/* -------------------------------------------------------------------------- */
// ANCHOR promises
// note: mfesh tre2a swa2 function async 2w promise ene 25od el data bt3tha mnha direct w 27otha fe constant msln la2 mynf3sh ,lazm lw hst3ml el data deh y2ma fl function nfsha 2w y2ma .then b3dha ka function tnya
// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 6 * 1000);
// });

// p.then((result) => {
//   console.log(result);
//   return result * 2;
// }).then((result) => {
//   console.log(result);
//   return result * 3;
// });
// hena l result bytl3 3ltol mara w7da 3ala el shasha lma m3mlsh reutrn l new promise w htkon l value l 2dema heya l value l gdeda ll then l gdeda

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 3 * 100);
// });

// p.then((result) => {
//   console.log(result);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(result * 2);
//     }, 3 * 1000);
//   });
// })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(result * 3);
//       }, 3 * 1000);
//     });
//   })
//   .then((result) => console.log(result));

// hena 3mlt return l promise fl then nafsha b7es 23ml resolve gded 5ales w kon hwa l value ll then l gdeda w hena l 2rqam htfdl mstnyaa kol settimeout fa msh htzhr mara w7da 3l shasha zy ele 2blha

//*settimeout:
// bthst8tl async
//7ata lw 3nde time b zero second htsht8l brdo async w ht3ml l str ele t7tha fl code l 2wal
//bshkl 3am l 7agat l async l browser hwa ele bysm7 enana n3mlha
// lma t5ls mn l api 2yan kan l wa2t bt3ha btro7 b3dha ll calback queue wlw l stack l 2main fady t5osh feh lw msh fady tstna

//* Async/Await:
// async bt3ml return l promise m3mlo resolve 3ala 7sb l qema ele h7otha fl return y3ny lw 3mlt return b 1 hyde promise m3mlo resolved value b 1 w moomkn 2st5dm b3dha then zy el 3ady enma await btde el resolved value zat nfsha ll promise (netninga is good for this point)
//await lazm tost5dm m3 7aga btkon btde promise
// async bt3ml promise ywrap l function kolha ele 3mlha 2sln

//*render:
// l render msh hysht8l lma ykon l call stack mlyan w dah ele 2sdhom beh lma by2olo dont block the eventloop y3ny mt5lesh  call stack mlyan 2wi lw2t tweel b7es ykon feh forsa eno y7sl render ele hwa moomkn y7sl kol 16ms fa philib roberts fl msal kan 3aml l fkra Async b7es enha lma l 7agat ele 3mlha sync tt3ml async htege mn l callback stack fa bta5od w2t seka l7ad matwsl ll stack l main bta3 l javascipt fa kda 3mlna w2t shwia fasl kda so8yr ll render

//* short circut evaluation:
// or(||) btrg3 2wel 7aga tl2eha true lw ml2tsh trg3 25er 7aga(y3ny moomkn brdo n2ol enha btrg3 2a5r 7aga lw kol ele 2bleha false)
//and(&&) btrg3 2wel 7aga tl2eha false lw ml2tsh trg3 25er 7aga mktoba(y3ny moomkn brdo n2ol enha btrg3 25er 7aga lw kol ele 2bleha true)

//*example for async stack overflow problem:
//fill array with 60000 elements

// const list = new Array(60).join('1.1');
// console.log(list);
// function removeItemsFromList() {
//   var item = list.pop();

//   if (item) {
//     removeItemsFromList();
//   }
// }

// // removeItemsFromList();
// //1
// setTimeout(() => {
//   console.log('1', 'is the loneliest number');
// }, 0);
// setTimeout(() => {
//   console.log('2', 'can be as bad as one');
// }, 10);

// //2
// Promise.resolve('hi').then((data) => console.log('2', data));

// //3
// console.log('3', 'is a crowd');

/* -------------------------------------------------------------------------- */
/*                                 use strict                                 */
/* -------------------------------------------------------------------------- */
// ANCHOR use strict
// 1)this fl function btde undefined badal window object
// 2) global pollution lma 23ml declar l variable mn 8er klmt var fe function fa yro7 3mlhomy fel global fa btw2f l mwdo3 dah w tdene referane error (w brdo lw 3mlt kda fl global scope msh lazm bs fe function)
//Note: strict mode msh btt3ml lw7dha lazm e7na n3mlha r8m en lw bst3ml 2dwat 5argya babel msln wl 7agat deh fl 8aleb homa byf3loo leya bs hwa brdo moomkn fe 7etat mo3yna fe es6 bykon mtf3l gahz zy fl es6 classes wl es6 module

//* lexical scope vs dynamic scope:
// lexical scope y3tmd 3ala enta htktb l code bta3k fan bzbt ee hwa bysht8l 3ala el varables wl functions w kda enma el dynamic m3naha eno y3tmd 3ala enta ht3ml call ll function ezay  w dah ele bytb2 m3 keyword this bs m3 this brdo moomkn tsht8l lexical lw fel arrow function

//* plusplus:
/* function plusplus(x) {
  let orgin_x = Number(x);
  orgin_x = orgin_x + 1;
  return orgin_x;
}
function plusplus(x) {
    x = Number(x);
    x = x + 1;
    return x;
  }

let x = '5';
console.log(plusplus(x)); */

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */
// ANCHOR TYPES

/* So we can create an empty object with new Object(). Side note: you should NEVER create an object using the constructor. It's considered bad practice
https://eslint.org/docs/2.0.0/rules/no-new-wrappers */

// mn l fdal en 25le undefined deh bs l engine hwa ele y7otha b7es 2fhm lw tl3tly en dah msh mene w lw 3ayz 27ot 7aga fdya 27otha ana 27sn b null, 3ala 2sas en el engine bytl3 undefined error brdo lw feh 7aga undeclared 2w y3ny msh mwgoda 2sln.

//*NaN:
//bt7wel el 2wal l value l number w b3d kda bttl3 true 2w false
//3shan nshl l mwdo3 moomkn nfkr feha enha m3mola leh bm3na heya m3mola 3shan nshof hal l qema deh number wala la2 fa mn el mntqe en l wa7d yshof lw et7wlt l number tb2a number lw et7wlt l NaN tb2a msh number kda y3ny
//feh tre2a b2 tnya 3shan 2shof l type ele hwa mzbot fe3lan ka string 2w number 2w Nan 2w kda y3ny ele heya Number.isNaN
// let catsAge = Number('n/a'); //btl3 Nan
// Number.isNaN('Mohammad'); //false
// isNaN('Mohammad'); //true
// Number.isNaN(catsAge); //true
//isNaN(catsAge); //true
//n2dr n2ol en isNaN lw7dha bts2l hal dah number wala la2 enma Nummber.isNaN bts2l hal dah type number wala la2 enma msh number fl motlq kda

//Nan mlhash idinty fl javascript y3ny bl8t l math kda bma enha mlhash idientity yb2a msh equal nfsha y3ny lw 3nde 7aga not a number zy catsAge lw 3mlt kda =>catsAge===catsAge (false)

//moomkn brod badal Number.isNaN 2st5dm => object.is('mohamed',Nan) //false

// fl (==) or (===) 2y 7aga mn l operands Nan 7ata lw el etnan byde false enma lw l etnan nan ele btde true heya Object.is

//* logical:
// or(||) btrg3 2wel 7aga moomkn tt3mlha coercion ela true( value 2wel 7aga true tege odamha)

/* function name(name) {
  console.log('hello ' + name);
}
name(); */

/* function name(name) {
  name = name || 'please put yuor name';
  console.log('hello ' + name);
}
name();
name('mohamed'); */

/* -------------------------------------------------------------------------- */
/*                                    Scope                                   */
/* -------------------------------------------------------------------------- */
// ANCHOR scope

// lexical scope hwa hdwr 3ala l 7aga fan(where to look for things) (where the variable is available in your code)

//enma lexical enviroment heya l data mwgda fan 2w mt3rfa fan phisically

//execution context l engine hwa ele by3mlha msh ana

//el 7aga ele mn 8er var msh btt3mlha assign 8er fl execution phase msh fl creation phase

// formal declarations in parsing phase(parser to to scope manager) and target or source referance in execution phase( js engine to scope manager )

//m3lomat el parsing phase:
//(1) red or blue marbel (esm l variable)
//(2) in which scope (red bucket or blue)
//(3) target or source (lw source bshof hwa gaay mn marbel lonha eh)
//(4)(tar2ebn dah fl execution phase msh fl parsing phase) lw 3nde function m3moha invoation hya5od  l arguments w yt3mlha assign ll parameters el 2wel

//*errors:
// 1) type error lma 2la2y 7aga mo3yna 3ady ka value w 23mlha 3leha 7aga msh btt3ml zy msln 23ml invokation l 7aga msh function fydene type error

// 2) referance error dah lma mya2esh variable ana bdwr 3leh (i couldnt find this variable)

/* -------------------------------------------------------------------------- */
/*                                    IIFE                                    */
/* -------------------------------------------------------------------------- */
// ANCHOR iffe

/* let teacher = 'kyle3';

let teacher4 = function teacher() {
  console.log('hobaa4');
};

function teacher2() {
  let teacher = 'bomba2';
  console.log(teacher);
}

 (function teacher() {
  let teacher = 'mmm1';
  console.log(teacher);
})();
teacher2();
console.log(teacher);
teacher4(); */

// el fkra kolha en l function declaration bt3ml declared l nfsha fl enclosing scope ele hwa fl msal dah kan msln function teacher1(red marbel) global red scope  enma lma bla2ey 7aga function expression(iife 2w function assin to variable) bt3ml declared lnfsha at their own scope y3ny ht7ot nfsha fl blue bucket w lys fel enclosing scope ele hwa global red scope (wel kalam dah brdo kolo fl parsing phase)

//function expression heya ele mshbtbtde bklmt fucntion 2yan kant y3ny msln l el iffe msh shart 2bd2haa b 2qwas zy kda((){})() la2 moomkn 27ot fel 2wal msln 2y 3lama l mohm en unciton mtbash 2wel kla 3shan tt7wel l function expression badal declaration

/* -------------------------------------------------------------------------- */
/*                                block scope                                */
/* -------------------------------------------------------------------------- */
// ANCHOR block scope

// 3shan ys7l block scope lazm 2kon katb let 2w const

//moomkn nst5dmo mkan l functoin bs lw fe 7aga bta5od expression mynf3sh 3shan hwa statement 7ata mfehosh return w kda

//yotbq 3leh nfs fkrt el scope bta3t l function bzbt y3ny lma byon feh gwa let 2w const by3ml scope lw7do(bucket) w btkon motsla bl outer enviroments(outer scopes)

// we can use explicit block scope lw 3yz 2a2ol en l shwia dol bl variavles ele fehom lw7dhom mlohmsh 3laqa  7aga tany fl function msln

/* ------------------------------------end ----------------------------------- */

//* when to use:
//mn l 2fdal en e7na nfdl nst5dm var 3ady lakn lw e7tagna 7aga mo3yna tkon m2fol 3leha fe block b7es l outer envitoment mywslhash s3tha nst5dm let 2w const(block scoping) enma msh 3mal 3ala batal y3ny lw 3nde 7aga msln zy function gwaha block lw el gwa el block dah msmo7 l ba2e ele gwa el function enha ts5dmo s3tha 2st5dm var 3ady enma lw msh msmo7 s3tha 2st5dm let

/* msal msln en hena mn l 2fdal ene 2sdt5m var badal let 3shan hena el try w catch lw 3mlnahom block s3tha msh h3rf 2st5dm l natega bt3thom bara l blocks bt3thom zy kda:
 function lookUp(searchStr) {
  try {
    var id = getRecord(searchStr);
  } catch {
    var id = -1;
  }
  return id;
} 
kaman fe nfs el msal ana 3yz 2st5dm var id 2ktr mn mara b7es en bshkl 3am 2yan kan ele hys7l swa2 try 2w catch ana 3ayz 25le id bqema mo3yna w23mlha return lw 3mlt dka m3 let msh hynf3 hydene error enk 3aml id 2bl kda */

/* ------------------------------------ end ----------------------------------- */

//* const:
/* // const mynf3sh yt3mlha reassign lakn moomkn ele gwaha yt8yr ka value 3ady lw l value muttable zy el Array msln
var teacher1 = 'Mohammad';
const teacher2 = teacher1; //log Mohammad
teacher2 = 'Ali'; //log typeerror(Assignment to constat variable)
const Array1 = ['Mohammad', 'Ali'];
Array1[1] = 'Khaled';
console.log(Array1); //log ['Mohammad', 'Khaled']

// afdl she2 est5dmha lw msh h3ml reassign lvalue tkon immutable zy el primative types
*/

/* ------------------------------------ end ----------------------------------- */

//* let and const hoist:
/* // let w const by7slhom hoisting brdo zy var bzbt bs msh by7slhom intialization w dah by5lek msh 2ader tst5dmhom 7ata lw mwgoden mn 8er mat3mlhom value 2blha 3ala 3ks var el ebtde undefined w s3tha hyde tdz error
var name = 'Mohammed';
{
  console.log(name);
  let name = 'Mohammad';
} // ReferenceError: Cannot access 'name' before initialization
// homa 3mlo l mwdo3 dah 3shan const 3shan lw m3mlosh kda const htkon undefined zy var wl mfrod enha msh btt8yr fa kda yo3tbr htt8yr lma tege t3mha assign fl execution phase fa 2alo n3mlha kda w bl mara let heya kaman b2a */

// mutate :tochange -- immutable :cant be changed

/* -------------------------------------------------------------------------- */
/*                                   Closure                                  */
/* -------------------------------------------------------------------------- */
// ANCHOR closure

//el closure dah msh by3ml capture over a value enma hwa by3ml kda ll variable sh5syn hwa byb2a 3aml link m3 l variable dah w 3nd l wa2t ele ht7tag el variable feh hyb2a lek acsses 3leh bnfs l qema ele hwa feha fl wa2t el 7aly 7ata lw et8yr kaza mara 2bl mt7tag t5osh 3leh 3n tre2 closure.(closure is a preservation of the linkage to a variable but not capturing the value)

//lma bdwr 3ala 7aga fel scope w ml2esh w2ro7 3ala outer scope dah by7sl 3ala 7sb ele mwgod fl call stack y3ny lw ml2tsh btl3 3ala l puter el emwgod fela7za el7alya fl stack el closure b2a hwa ele bysm7ly ene 2ro7 ll outer scope bta3 ele gwa 2yan kan swa2 kan fl stack 2w la2

//el closure by7sl lma 23ml return l function by calling the parent function that return it w bykon feh hidden property ll functoin ele 3mlha return esmha [[scope]] deh byt5zn feha kol el variables ele m7tgha mn l parent function lma 2st3ml el returned function bs na5od balna eno l variables ele m7tgha bs ele msh m7tgha msh by5znha.el variables ele btt5zn deh esmha =>P.L.S.R.D (persistent lexically scoped reference data) 7es en reference 2sdo enha el hidden property [[scope]].

/* ----------------------------------- end ---------------------------------- */

//* example loops:

/* for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(`i: ${i}`);
  }, i * 1000);
} */
/* el fkra hena en ele hytb3 hwa 2a5er qema l variable i 3shan lma el call back functoin ele fl settimeout yt7to klhom fl task queue wl event loop ywdehom l callstack yt3mhom execution kolohm byhwro ll var i 3n tre2 el closure fa htkon l i b25er qema leha ayan kant fa 3shan 27l l moshkl adeh m7tag 23ml variable lkol loop t7sl w dah let bt3mlo automatic.
 2w moomkn brdo 7al tany ene 25le l callback function bta3t settimeout tt3rf fe scope gded bt3ha fe kol loop badal matt3rf fe scope el for nfsha fa tb2a kol w7da leha scope lw7dha 3n tre2 el iife 3shan el fuction expression zy ma7na 3rfen btt3rf in its own scope */

//? using let
/* for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(`i: ${i}`);
  }, i * 1000);
} */

//? using iife
/* for (let i = 1; i <= 3; i++) {
  setTimeout(
    (function () {
      return function () {
        console.log(`i: ${i}`);
      };
    })(i),
    i * 1000
  );
} */

/* -------------------------------------------------------------------------- */
/*                                    this                                    */
/* -------------------------------------------------------------------------- */
// ANCHOR this

//context hwa el object ele 3ml invocation ll function

//el call site hwa el makan ele 3mlt feh invocation l function mo3yna lw lw 3mlt invocation fl global yb2a kda l call site hwa el global exection context w lw 3mlt invocation l function gwa function l parent function heya htkon l call site

//* lexical scope vs dynamic scope:
// lexical scope y3tmd 3ala enta htktb l code bta3k fan bzbt ele hwa bysht8l 3ala el varables wl functions w kda enma el dynamic m3naha eno y3tmd 3ala enta ht3ml call ll function ezay  w dah ele bytb2 m3 keyword this bs m3 this brdo moomkn tsht8l lexical lw fel arrow function

//* this precedence:
/* 
1)new keyword
2)call,apply,bind
3)context object(invoked by an object)
4)global object(undifened in strict mode)
 */
//Note: lw est5dmt keyword bind 3shan 28yr context this mynf3sh 28yr lcontext tany b3d kda b bind tany lw h8yr lazm yb2a b new keyword

/* 
var obj = {
  teacher: 'Kyle',
  ask: function ask(input) {
    console.log(this.teacher, input);
  },
};
new (obj.ask.bind(obj))('here'); */

//* examples:
// let dog = {
//   name: 'wego',
//   foo: function () {
//     console.log(this.name);
//     return 2;
//   },
// };

// dog.foo();

// let globalFn1 = dog.foo(); // type of globalFn1=> number
// console.log(globalFn1);

// let globalFn2 = dog.foo; // type of globalFn2=> function
// console.log(globalFn2);

// globalFn2(); //give nothing from console.log(this.name)

// let bindFn = globalFn2.bind(dog); //bind msh bt3ml invocation ll function
// bindFn(); //now it gives what we want

/* function bar() {
  'use strict';
  function bazz() {
    console.log(this.b);
  }
  bazz();
}

var a = { b: 5 };

bar(); */

/* function a() {
  var obj = { name: 'Mohammad' };
  function b() {
    console.log(this.name);
  }
  b.call(obj);
}
a(); */

/* ----------------------------------- end ---------------------------------- */

//* article:(https://scotch.io/tutorials/why-this-in-javascript)
/* Commonly in the English language, once a noun is defined in a sentence, subsequent references to the subject noun will be done using a pronoun. Understand?

First Statement: Brad is a good boy. Second Statement: He is a very brilliant boy!

Who is a brilliant boy? Brad... obviously!

This is quite the same in JavaScript, the first statement creates the context, while this functions like 'he' in the second statement and is used to reference the subject in the first statement.
this refers to the context of an executing function.

This would mean that during every function execution, the focus is on the new execution context which is redetermined whenever a function is invoked, and since the context holds a reference to an object, the value of this is updated accordingly.

It is impractical to assume that the value of this is fixed and always refers to the function’s scope, the value of this is, in fact, dynamic and determined by how a function is called and where it is called:

Different sections in a JavaScript program run in an execution context and maintain that context until there is a switch to a new context. The context of an executing function references the object that invoked it, therefore, a call to this within a function refers to the invoking object.

Since the context is really important to our understanding of this, we need to know how/why the context switches during runtime:

How does the context change?
The current execution context in a JavaScript program usually points to the object that invokes a function and can be switched to another object by invoking the function with another object.

Call-Site
The place where a function is invoked in a JavaScript program is called the call-site. This is also important in determining the value of this because if the function isn’t invoked by any visible object, the current context of the call-site would be responsible for setting the new execution context of the function.

In simpler terms, the value of this represents the context of the initial executing function in a call-site and remains the same in any other call-site an invoking function doesn't provide context.

We can finally define this based on all of the explanations presented above:

The value of the this keyword is dependent on the object upon which it is invoked and not the function itself or the function’s scope.

The call-site of the function is also important in determining what this refers to.

Default binding
Let’s say we were writing a program and defined a function where we used the this keyword, then we invoked the function in the global scope (outside of any function) of the program. What object do you think the this keyword would reference runtime? Let’s see:

let randomFunction = () => {
  this.attribute = 'This is a new attribute to be created on the invoking object';
  console.log(this);
}

randomFunction();
Good thinking! This references the global object in the output below:

In the code above, we created a random function that attaches a new property “attribute” to whichever object invokes it. Because the call-site of the function invocation had its context referencing the global object (this is default), we see that in the output, the console logs a lot of properties that are attached to the global object (Window object) including the property that was created by the random function.

This is the default binding of this in JavaScript. When a function is called without an object, this is by default bound to the current execution context, we will look at the other bindings below.

By default, this is bound to the global object when invoked by a global function.

It is noteworthy that when we are coding in strict mode, this holds the value of undefined in global functions and in anonymous functions that are not bound to any object.
 */

/* ----------------------------------- end ---------------------------------- */

//* examples:

/* function take(cb) {
  cb();
}
take(function cb() {
  console.log(this);
}); //window object */

/* //it not depends on the call site it will always the default be global object lw m3mltsh invoke ll function b object
function memo() {
  var obj = {
    name: 'Mohammad',
    name1() {
      console.log(this.name);

      function whatThis() {
        'use strict';
        console.log(this);
      }

      whatThis();
    },
  };

  obj.name1();
}
memo(); */

/* ----------------------------------- end ---------------------------------- */

//* Arrow functions:(msh bt3ml bind l this btshof l parent 3aml eh w t3ml zyo wbltaly msh btt2sr bind w call w applay)
//el arrow functions btsht8l bl lexical scope msh bl dynamic scope w bl chain y3ny btro7 ll parent function bt3tha (lexiclly) tshof men el object ele mstd3eha yb2a dah this lw ml2tsh tkml el chain kda y3ny

//*Note: lma 2ktb object.7aga wl 7aga deh msh mwgoda fl object dah bydene bytb3ly undefined enma msh bydene error eno el 7aga deh msh mwgoda:
/* var obj = { name: 'Mohammad' };
console.log(obj.memo);
console.log(this.mkgdh);
function take(cb) {
  cb();
}
take(() => {
  console.log(this.hobaa);
}); */

//*lexical scope(parent bta3 el callback hwa el global scope(fellexical bs lw dynamic htb2a take heya l parent 3shan heya ele tm estd3a2 el callback feha w s3tha fl msal dah htb2a global brdo 3shan cb mfesh object estd3aha fa htro7 automatic ll global brdo) fa this heya el global hena)
/* var obj = {
  moka: 'memo',
  take: function take(cb) {
    cb();
  },
};
var moka = 'hobaa';
obj.take(() => {
  console.log(this.moka);
}); */

//*lexical scope(parent bta3 el callback hwa el global scope fa this heya el global heya)(msh babos 8er 3ala el function zat nfsha bs mlesh d3wa men ele mstd3eha 5alass leya d3wa bmknha wl parent bt3ha lexically enma lw dynamic habos 3ala men ele mstd3eha bzbt w lw mfesh object mstd3eha hyon automatic el global)
/* var obj = {
  nama: 'memo',
  take: function take(cb) {
    var fun = cb;
    var obj2 = {
      nama: 'Mohammad',
      maka: fun,
    };

    obj2.maka();
  },
};
var nama = 'Khaled';
obj.take(() => {
  console.log(this.nama);
}); */

//*dynamic scope (obj2 hwa ele mstd3y maka)(babos 3ala men el object ele mstd3y el function)
/* var obj = {
  nama: 'memo',
  take: function take(cb) {
    var fun = cb;
    var obj2 = {
      nama: 'Mohammad',
      maka: fun,
    };

    obj2.maka();
  },
};
var nama = 'Khaled';
obj.take(function hoba() {
  console.log(this.nama);
}); */

//*msal yo7aky l settimeout:(msal 3mlo 3shan n3rf en el callback function el parent bt3ha msh l function ele mstd3yaha enma el outer function)
/* function cb(fn) {
  var fun = fn;
  var test = { age: 55, foo: fun };
  test.foo();
}
var obj = {
  age: 87,
  ask() {
    cb(function hoba() {
      //foo
      console.log(this.age);
    });
  },
};
obj.ask(); */

/* function cb(fn) {
  var fun = fn;
  var test = { age: 55, foo: fun };
  test.foo();
}
var obj = {
  age: 87,
  ask() {
    cb(() => {//foo
      console.log(this.age); 
    });
  },
};
obj.ask(); */

//*msal yod7 en l arrow functions msh btt2sr b bind w call w applay
//  (el objects msh by3ml scope)
/* var workshop = {
  teacher: 'kyle',
  ask: () => {
    console.log(this);
  },
};
workshop.ask(); //  (el objects msh by3ml scope l puter scope bta3 l arrow function hena hykon el global scope)
workshop.ask.call(workshop); //call dont work */

//*mol5s:
//el arrow functions btsht8l lexical y3ny 3ala 7sb l function mktoba fan wel parent btha bykon 3ala 7sb mktoba fan brdo gsm l function nfso msh babos 3ala et3mlha invocation fan enma lw msh arrow y2ba el mwdo3 dynmic y3ny sh habos 3ala gsm el function nfso 3shan 23rf his btshar 3ala eh la2 habos 3ala tm estd3a2ha fan bzbt w lw mfesh objet estd3aha htkon automatic el global

/* ----------------------------------- end ---------------------------------- */

//*class:

//*el object ele estd3a l callback function hena hwa window 3shan by7sl gwa function settimeout(dynamic scope)
/* class workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask() {
    console.log(this.teacher, 'here');
  }
}
var deepjs = new workshop('kyle');
setTimeout(deepjs.ask, 100); */

//*hena ask h5leha arrow fal mwdo3 hysht8l lexical fa habos 3ala gsm el function nfso w hykon kda l parent bta3o hwa el constrcutor ele by5le thiss bt3to 3n tre2 klmt new yshawr 3ala object deepjs fa hykon dah brdo ele byshar 3leh this fl arrow function
//w 3shan 25leha aarow function m7tag 27otha fl constructor nfso w kda htb2 msh fl prototype deh htt3ml m3 kol object w dah 7aga w7sha tb3an bs leha 7al 2ylo fl video
/* class workshop {
  constructor(teacher) {
    this.teacher = teacher;
    this.ask = () => {
      console.log(this.teacher, 'here');
    };
  }
}
var deepjs = new workshop('kyle');
setTimeout(deepjs.ask, 100); */

/* -------------------------------------------------------------------------- */
/*                                  prototype                                 */
/* -------------------------------------------------------------------------- */
//ANCHOR prototype
//Arrow functions has no prototype regular functions only

//prototypal inheritance(delegation) bt3ml link msh copy zy el classical inheritance

//classes are first class citizen
//classes are executed in strict mode
//classes can be expressions

/* class test {
  constructor(age) {
    this.age = age;
  }
  ask1() {
    console.log(this.age, 1);
  }
}

test.prototype.ask2 = function ask2() {
  console.log(this.age, 2);
};

var obj1 = new test(758);
var obj2 = new test(8);

obj1.ask2();
obj2.ask2(); */

/* ----------------------------------- end ---------------------------------- */

//* getter and setter:
//Note: 3shan 2st3ml getter 2w setter function msh b3mlha invocation heya bt3ml lw7dha

/* var obj = {
  age: 989,
  nume: 'Mohammad',
  get person() {
    return this.nume;
  },
  set person(nume) {
    this.nume = nume;
  },
};

//getter:
console.log(obj.person);

// setter:
obj.person = 'khaled';
console.log(obj.nume); */

//moomkn tt3ml fel classes brdo:
/* class test {
  constructor() {}

  set fullName(name) {
    console.log('welcome from setter function');
    this._fullName = name;
  }
  get fullName() {
    return this._fullName;
  }
}
var person = new test();
person.fullName = 'Mohammad';
// console.log(person);
console.log(person.fullName); //undefined withour getter Mohammad with the getter
console.log(person._fullName);
 */
/* ----------------------------------- end ---------------------------------- */

//*prototype example:
//hena 3adya 5ales el dunderproto byshar 3ala el constructor's prototye:
/* function people(nume, age) {
  this.nume = nume;
  this.age = age;
}
people.prototype.fullName = function fullName(hisName) {
  console.log(`the full name is blabla ${hisName}`);
};
var people_1 = new people('saeed', 27);
console.log(people_1);
console.dir(people_1.__proto__); */

/* ----------------------------------- end ---------------------------------- */

//*inheritance:

/* function people(nume, age) {
  this.nume = nume;
  this.age = age;
}
people.prototype.fullName = function fullName(hisName) {
  console.log(`the full name is blabla ${hisName}`);
};

function student(nume, age, section) {
  people.call(this, nume, age); //deh klmt super
  this.section = section;
}

student.prototype = Object.create(people.prototype); //el kalam dah extend bt3mlo lw7dha
//i think or student.prototype.__proto__ = people.prototype;
student.prototype.birthday = function birthday() {
  console.log('happy birthday');
};

var student_1 = new student('Nady', 25, 1);
console.log(student_1);
console.log(student.prototype.__proto__);
console.log(people.prototype);
console.dir(student.prototype.constructor);
console.dir(student.prototype);
//hnla7z hena en l constructor ba2et people 3shan el dunder proto bta3 student's prototype b2a yshwr 3ala prototype ele gwa people(3shan lma 3mlna object.create)
//3shan n7el l moshkla deh shla moomkn n3mlha e7na bedana
student.prototype.constructor = student;
console.dir(student.prototype.constructor);

//w kaman moshkla kaman fl object student_1 ele 3mleno mn constructor student el mfrod el dunderproto bta3o ytktb student prototybe bs hwa katb people (3shan lma 3mlna object.create brdo)
//deh msh 3arf 7lha ezay fkrt en l esm ele mktob msh mzbot enma l functions nfsha mzbota */

/* ----------------------------------- end ---------------------------------- */

//*inheritance with classes:

/* class Animal {
  constructor(nume, age, color) {
    this.nume = nume;
    this.age = age;
    this.color = color;
  }

  giveName() {
    console.log(this.nume);
  }
}

class Cat extends Animal {
  constructor(nume, age, color, tailLength) {
    super(nume, age, color); //lazm tt3ml lw hktb klmt this(deh makan call)
    this.tailLength = tailLength;
  }

  giveTailLength() {
    console.log(this.tailLength);
  }

  static animalType() {
    console.log(Cat);
  } //el static btkon el 7agat ele mwgoda fl constructor zat nfsha msh fl prototype ele gwaha y3ny kda Cat.animalType=function(){}
}

var cat_1 = new Cat('kity', 35, 'white', '10Cm');

console.log(cat_1);

Cat.animalType(); */

/* -------------------------------------------------------------------------- */
/*                           functional programming                           */
/* -------------------------------------------------------------------------- */
//ANCHOR functional programming:

//* idempotence:
//m3naha enta 3arf el function  htl3 eh swa2 kant pure 2w la2(swa2 leha side effects 2w la2)

//*m7tagen functions tkon bta5od input wa7d bs wbnst3ml el curry wl partial application w kda 3shan nwsl l mwdo3 dah w bys3dna fe kda tb3an el closure

//* example:
// 1. add items to cart
// 2. add 3% tax to items to cart
// 3. buyitem => purchase
// 4. Empty cart

/* var user = {
  name: 'Nady',
  active: true,
  cart: [],
  purchase: [],
};
var compose = (f, g) => (...args) => f(g(...args));

function userPurchase(...fns) {
  fns.reduce(compose);
}
userPurchase(
  addItemToCart,
  applayTax,
  addItemToPurchase,
  empty
)(user, { name: 'laptop', price: 876 });

function addItemToCart(user, item) {
  return { ...user, cart: [item] };
}
// var ex = addItemToCart(user1, { name: 'laptop', price: 876 });
// console.log(ex);
// console.log(user1);

function applayTax(user) {
  var { cart } = user;
  var taxRate = 1.3;
  var updatedCart = cart.map(function updateCartItem(item) {
    return { ...item, price: price * taxRate };
  });

  return { ...user, cart: updatedCart };
}

function addItemToPurchase(user) {
  return { ...user, purchase: user.cart };
}
function empty(user) {
  return { ...user, cart: [] };
} */

/* ----------------------------------- end ---------------------------------- */

/* var user1 = {
  name: 'Nady',
  active: true,
  cart: [],
  purchase: [],
};
function userPurchase(...fns) {
  return fns.reduce(function test1(f, g) {
    return function test2(...args) {
      return f(g(...args));
    };
  });
}
//OR
//  function userPurchase(...fns) {
//   return function(...args) {
//     let result = args;

//     // The original logic apply the functions in reverse:
//     for (let i=fns.length-1; i>=0; i--) {
//         let f = fns[i];
//         result = f(result);
//     }

//     return result;
//   }
// } 

var memo = userPurchase(
  empty,
  addItemToPurchase,
  applayTax,
  addItemToCart
)(user1, { name: 'laptop', price: 876 });

function addItemToCart(user, item) {
  return { ...user, cart: [item] };
}
// var ex = addItemToCart(user1, { name: 'laptop', price: 876 });
// console.log(ex);
// console.log(user1);
function applayTax(user) {
  var { cart } = user;
  var taxRate = 1.3;
  var updatedCart = cart.map(function updateCartItem(item) {
    return { ...item, price: item.price * taxRate };
  });

  return { ...user, cart: updatedCart };
}
function addItemToPurchase(user) {
  return { ...user, purchase: user.cart };
}
function empty(user) {
  return { ...user, cart: [] };
} */

/* var shopCart = [
  { product: 'tea', quant: 8 },
  { product: 'bread', quant: 3 },
  { product: 'rice', quant: 5 },
];
function check(cart) {
  const newCart = cart.map((item) => {
    return (item.quant = 9);
  });
  console.log(newCart);
}
check(shopCart);
console.log(shopCart); */

/* var shopCart = [
  { product: 'tea', quantity: 8 },
  { product: 'bread', quantity: 3 },
  { product: 'rice', quantity: 5 },
];
const newCart = shopCart.map((item) => (item.quantity = 100));
console.log(newCart);
console.log(shopCart); */

/* let obj = { nume: 'memo' };
function test(objt) {
  objt.nume = 'kjkjh';
}
test(obj);
console.log(obj); */

/* ----------------------------------- end ---------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 new Keyword                                */
/* -------------------------------------------------------------------------- */
// ANCHOR - new Keyword:

//from MDN:
//1) Creates a blank, plain JavaScript object.
//2) Adds a property to the new object (__proto__) that links to the constructor function's prototype object
// Note: Properties/objects added to the construction function prototype are therefore accessible to all instances created from the constructor function (using new).
//3) Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).
//4) Returns this if the function doesn't return an object.

/* ----------------------------------- end ---------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               web performance                              */
/* -------------------------------------------------------------------------- */
// ANCHOR - web performance:

/* https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#Introduction
The order of processing scripts and style sheets
Scripts
The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a <script> tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network–this is also done synchronously, and parsing halts until the resource is fetched. This was the model for many years and is also specified in HTML4 and 5 specifications. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.

Speculative parsing
Both WebKit and Firefox do this optimization. While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved. Note: the speculative parser only parses references to external resources like external scripts, style sheets and images: it doesn't modify the DOM tree–that is left to the main parser.

Style sheets
Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing. There is an issue, though, of scripts asking for style information during the document parsing stage. If the style is not loaded and parsed yet, the script will get wrong answers and apparently this caused lots of problems. It seems to be an edge case but is quite common. Firefox blocks all scripts when there is a style sheet that is still being loaded and parsed. WebKit blocks scripts only when they try to access certain style properties that may be affected by unloaded style sheets.

Actions when the parsing is finished
At this stage the browser will mark the document as interactive and start parsing scripts that are in "deferred" mode: those that should be executed after the document is parsed. The document state will be then set to "complete" and a "load" event will be fired. */

/* https://stackoverflow.com/questions/34269416/when-does-parsing-html-dom-tree-happen
You can use DOMContentLoaded to detect whether the initial DOM is loaded and parsed. And your statement in last paragraph is quite correct: every time HTML parser see a <script>, it will download and execute it synchronously (see Notice 2). After all <script> are executed and all HTML is parsed, DOMContentLoaded will be fired.

Notice 1: DOMContentLoaded will NOT wait for CSS and images

Notice 2: Most browsers have "Speculative parsing" feature. If there are multiple JavaScript files, they will be downloaded simultaneous. However, they will still be executed sequential by the main thread.

the browser will try to paint ASAP. That is to say, the paint engine won't wait for render tree is fully ready. So there should be a separated thread to handle the paint. */

/* https://stackoverflow.com/questions/66459090/what-happens-to-the-rendering-engine-in-chrome-when-the-browser-download-css-fil

The following happens in Chromium:
CSS files, like any other files loaded through a <link> element won't affect the parser. The parser will continue and simultaneously send out a GET request to fetch the requested source. The CSS is parsed by the main thread, but this is done after the HTML is parsed.

At that time the HTML will be parsed first, after that the CSS will be parsed. Only the download of CSS files happens concurrently

If JS scripts have the defer attribute (which by default is enabled) they will block the parsing process, until the JS file is fetched (either from the network, or from the local cache), parsed, and executed. However, you can add the async attribute to <script> tags, this will treat them like CSS files. – Keimeno 1 hour ago */

/* -------------------------------------------------------------------------- */
/*                                   monw3at                                  */
/* -------------------------------------------------------------------------- */
//ANCHOR monw3at

//* what-is-the-difference-between-for-in-and-for-of-statements:
// https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements

// Object.keys(object-name-goes-here) >>> Returns the keys or properties of an object.
// Object.values(object-name-goes-here) >>> Returns the values of an object.
// Object.entries(object-name-goes-here) >>> Returns both the keys and values of an object.
/* let myKeys = Object.values(profile);
console.log(myKeys); */

//* Split:
// https://www.geeksforgeeks.org/javascript-string-prototype-split-function/
/* separator: It is used to specifie the character, or the regular expression, to use for splitting the string. If the separator is unspecified then the entire string becomes one single array element. The same also happens when the separator is not present in the string. If the separator is an empty string (“”) then every character of the string is separated.
limit: Defines the upper limit on the number of splits to be found in the given string. If the string remains unchecked after the limit is reached then it is not reported in the array.
Return value
This function returns an array of strings that is formed after splitting the given string at each point where the separator occurs. */

//* replace:
//The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.

//* push:
//The push() method adds one or more elements to the end of an array and returns the new length of the array.

//* pop:
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

//* shift:
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

//* unshift:
//The unshift() method adds new items to the beginning of an array, and returns the new length. unshift() overwrites the original array.

//* Math.sign(number);
/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
A number representing the sign of the given argument:
If the argument is positive, returns 1.
If the argument is negative, returns -1.
If the argument is positive zero, returns 0.
If the argument is negative zero, returns -0.
Otherwise, NaN is returned. */

//*Object.seal():
//The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable. (prevent from deleting)

//*preventExtensions():
//The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).

//*Object.getOwnPropertyDescriptor(object,'prperty') :
//writable: if the property can be changed.

//enumerable: if the property can be looped over in a forinloop .

//value: current value.

//configurable: if the Descriptors configration can be changed and if the property can be deleted.

//to changes them=> Object.defineProperty(object,'prperty',{writable:false})

//* inherritance vs composition:
/* const eater = (state) => {
  return {
    eat(amount) {
      console.log(`${state.name} is eating.`);
      state.energy += amount;
    },
  };
};

function Cat(name, energy, declawed) {
  this.name = name;
  this.energy = energy;
  this.declawed = declawed;

  return Object.assign(this, eater(this));
}

const charles = new Cat('Charles', 10, false);
charles.eat(2); */

/* 
in typescript both inheritance and composition byt3mlo 8alban en 3n tre2 en bykon feh funtion mo3yna w bytm 3mlha implemintaion btro2 mo5tlfa, bs fl composition bl interface wfl inheritance bl extend w override, w tb3an el inhertiance moomkn yt3m beh 7agat 2ktr mn kda. 
*/

//* localStorage vs indexedDB:
/* localStorage, or more accurately Web Storage, was designed for smaller amounts of data. It's essentially a strings only key - value storage, with a simplistic synchronous API. That last part is key. Although there's nothing in the specification that prohibits an asynchronous Web Storage, currently all implementations are synchronous (i.e. blocking requests). Even if you didn't mind using a naive key - value storage for larger amounts of data, your clients will mind waiting forever for your application to load.
indexedDB, on the other hand, was designed to work with significantly larger amounts of data. First, in theory, it provides both a synchronous and an asynchronous API. In practice, however, all current implementations are asynchronous, and requests will not block the user interface from loading. Additionally, indexedDB, as the name reveals, provides indexes. You can run rudimentary queries on your database and fetch records by looking up theirs keys in specific key ranges. indexedDB also supports transactions, and provides simple types (e.g. Date).

IndexedDB is not a key-value store in the same way that Local Storage is. Local storage just stores strings, so to put an object in local storage the usual approach is to JSON.stringify it:
myObject = {a: 1, b: 2, c: 3};
localStorage.setItem("uniq", JSON.stringify(myObject));
This is fine for finding the object with key uniq, but the only way to get the properties of myObject back out of local storage is to JSON.parse the object and examine it:
var myStorageObject = JSON.parse(localStorage.getItem("uniq"));
window.alert(myStorageObject.b);
This is fine if you only have one, or a few objects, in local storage. But imagine you have a thousand objects, all of which have a property b, and you want to do something just with those ones where b==2. With local storage you'll have to loop through the entire store and check b on each item, which is a lot of wasted processing.
With IndexedDB you can store stuff other than strings in the value: "This includes simple types such as DOMString and Date as well as Object and Array instances." Not only that, but you can create indexes on properties of the objects that you stored in the value. So with IndexedDb you can put those same thousand objects in it but create an index on the b property and use that to just retrieve the objects where b==2 without the overhead of scanning every object in the store.
*/

/* 
class Animal {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  sound() {
    console.log('defaault sound');
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  sound() {
    console.log('meow sound');
  }

  get name() {
    console.log('welcome from getter function');
    return this._name;
  }
  set name(name) {
    console.log('welcome from setter function');
    this._name = name;
  }
  get breed() {
    console.log('welcome from getter function');
    return this._breed;
  }
  set breed(breed) {
    console.log('welcome from setter function');
    this._breed = breed;
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  sound() {
    console.log('howhow sound');
  }
}

// let hanafy = new Dog('7anafy', 15);
// let elephant = new Animal('sa3d', 15);
let hamdya = new Cat('7amdya');
hamdya.breed = 'syamy';
console.log(hamdya);
console.log(hamdya.name);
 */

/* let temp = 'hi';

function display() {
  console.log(temp);
  let temp = 'bye';
}

display(); */

/*
1st step(gm3 kol el variables):
put variable temp im memory with 
put variable display im memory as a function body

2nd step(nfz):
put temp ='hi
invoke function display;
   1st step(gm3 kol el variables):
    put variable temp im memory with undefined
    2nd step(nfz):
*/
