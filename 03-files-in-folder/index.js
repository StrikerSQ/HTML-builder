const fs = require('fs');
const path = require('path');
const pathFile = './03-files-in-folder/secret-folder';
for (let p in pathFile) {
  console.log(p);
}
// let s = fs.stat(pathFile, (err, f) => {
//   return f.size;
// });

fs.readdir(pathFile, (err, files) => {
  if (err) {
    console.log(err);
  }
  files.forEach((file) =>
    console.log(
      path.basename(file, path.extname(file)),
      '-',
      path.extname(file),
      '-',
      // fs.stat('', file).size,
    ),
  );
});
