//0
const isDogBetter = true;
const isCatBetter = false; 
//1
//a
console.log ( isDogBetter && isCatBetter);
//b
console.log ( isDogBetter || isCatBetter);
//c
console.log (!(isDogBetter && isCatBetter));

//2
const atoms = 10;
const sandGrains = 20;
const starsInSky = 30;

//3
//a
console.log( atoms > starsInSky && atoms > sandGrains);
//b
console.log(atoms !== sandGrains);
//c
console.log(starsInSky < sandGrains || starsInSky > atoms);
//d
console.log(atoms === starsInSky || atoms !== sandGrains)
//e 
console.log(atoms >= 10 && sandGrains >= 10);
//f
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100);







