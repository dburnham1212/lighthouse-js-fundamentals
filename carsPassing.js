const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
console.log(cars);
const speed = 38

function carPassing(cars, newSpeed){
  cars.push({ time: Date.now, speed: newSpeed });
  return cars;
}

console.log(carPassing(cars, speed));