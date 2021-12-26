const Queue = require('./Queue');

function hotPotato(elementList, num) {
  const queue = new Queue();
  const elimitateList = [];
  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    elimitateList.push(queue.dequeue());
  }
  return {
    eliminated: elimitateList,
    winner: queue.dequeue()
  }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7)

result.eliminated.forEach(name => {
  console.log(`${name}在击鼓传花游戏中被淘汰`)
})
console.log(`胜利者: ${result.winner}`)
