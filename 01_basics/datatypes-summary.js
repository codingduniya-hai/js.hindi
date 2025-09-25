//primitve

// 7 types ;string,number,boolean, null,undefined,symbol,bigint





//Reference (non-primitve)

//Array,object,Function

const heros =["shaktiman","naagraj","doga"];
let myobj = {
    name:"azeez",age: 22
}

const myFunction = function(){
    console.log("hello world");
}
//console.log(typeof myFunction);
//console.log(typeof heros);
//console.log(typeof myobj);
//console.log(typeof Array);
//console.log(typeof object)
//console.log(typeof String);
//console.log(typeof Number);
//console.log(typeof Boolean);
//console.log(typeof BigInt);
//console.log(typeof Symbol);






//=================================================
//stack (primitive), heap (non-primitive)

let myYoutubename = "azeez"

let anothername = myYoutubename
anothername ="khan"
console.log(anothername);
console.log(myYoutubename);


let userOne = {
    wmail:"user@google.com",
    upi:"1225@bhy"
}

let userTwo = userOne


userTwo.email  = "kuchjj@google.com"

console.log(userOne.email);
console.log(userTwo.email);
