const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'plumpness';

function judgeVegetable(vegetables, metric){
  let winner = "";
  let winnerValue = 0;
  vegetables.forEach(vegetable => {
    if(vegetable[metric] > winnerValue){
      winner = vegetable.submitter;
      winnerValue = vegetable[metric];
    }
  });
  return winner;
}

console.log(judgeVegetable(vegetables, metric));