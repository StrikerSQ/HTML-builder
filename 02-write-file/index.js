const fs = require('fs');

const data = 'Hallo world';

fs.writeFile('./02-write-file/text.txt', data, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('succesful');
});
