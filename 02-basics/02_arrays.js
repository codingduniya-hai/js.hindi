const marvel_heroes = ["thor","ironman", "spiderman"]
const dc_heros = ["batman","superman","batman"]

//marvel_heroes.push(dc_heros)
//console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

 //const allheros = marvel_her0es.concat(dc_heros)
 //console.log(allheros);


 const allnewheros = [...marvel_heroes, ...dc_heros]

 //console.log(allnewheros);

 const another_array = [1,2,3,[4,5,6],7,[6,7,[5,6]]]

 const real_another_array = another_array.flat(Infinity)
 console.log(real_another_array);

 console.log(Array.isArray("Azeez"));
console.log(Array.from("Azeez"))



console.log(Array.from({name: "Azeez"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

















