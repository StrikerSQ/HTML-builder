const fs = require('fs');
// const path = require('path');

// fs.mkdir(path.join(__dirname, 'files-copy'), (err) => {
//   if (err) {
//     return console.error(err);
//   }

//   console.log('Directory created successfully!');
// });
fs.readdir('./04-copy-directory/files/', (err, files) => {
  fs.copyFile(files, './04-copy-directory/files-copy/', function (err, data) {
    if (!err) {
      console.log(data);
    } else {
      console.log(err);
    }
  });
});
