const fs = require('fs');

fs.readFile('./01-read-file/text.txt', function (err, data) {
  if (!err) {
    console.log(data.toString());
  }
  console.error(err);
});
