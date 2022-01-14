const fs = require('fs')
const readline = require('readline');


const cmdArg = process.argv[2];

async function fmt (filePath) {
  const stream = fs.createReadStream(filePath);

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

fmt(cmdArg)
  .catch(err => {
    console.log(err);
  });