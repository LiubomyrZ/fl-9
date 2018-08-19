let sideA = parseFloat(prompt('length of side a'));
let sideB = parseFloat(prompt('length of side b'));
let angle = parseFloat(prompt('size of angle'));
const forCos = 180;
let radians = Math.cos(angle * Math.PI / forCos);
let temp = Math.pow(sideA, 2) + Math.pow(sideB, 2) -2 * sideA * sideB * radians ;
let sideC = Math.sqrt(temp);

let perimeter = sideA + sideB + sideC;
var square = Math.sqrt(perimeter*(perimeter - sideA) * (perimeter - sideB) * (perimeter - sideC));

if (sideA <=0 || isNaN(sideA) || sideB<=0 || isNaN(sideB) || isNaN(angle) || angle % 1 !== 0){
    alert('invalid data');
} else {
    console.log(`c length: ${sideC.toFixed(2)}
    Triangle square: ${square.toFixed(2)}
    Triangle perimeter: ${perimeter.toFixed(2)}`);
}
