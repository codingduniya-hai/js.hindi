const name = "azeez"
const repoCount = 50

//console.log( name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo  Count is ${repoCount}`);

const gameName = new String ('azeezh-hc')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));

const newString = gameName.substring(0,5)
console.log(newString); 


const anotherString = gameName.slice(-8,5)
console.log(anotherString);


const newStringOne = "  Azeez  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https;//azeez.com/azeez%30khan"
console.log(url.replace('%30' ,'-'))




