const fs = require('fs')
const readline = require('readline');


async function fmt () {
  const stream = fs.createReadStream(__dirname + '/things.txt');

  const lines = readline.createInterface({
    input: stream,
    crlfDelay: Infinity
  });

  let thing = {
    things: []
  };

  for await (let line of lines) {
    thing.things = thing.things.concat(line.split(/[ \t]+/));
  }

  fs.writeFile('things.json', JSON.stringify(thing), 'utf-8', () => {
    console.log('Things are ready to be used in things.json');
  })
}

fmt();