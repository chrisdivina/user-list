const fs = require('fs');
const path = require('path');

module.exports = function upload(req, res, next) {
  const { imageFile } = req.body;
  const id = req.body.id || req.params.id;
  console.log(imageFile);
  if (imageFile) {
    const regex = /data:image\/([\w+]+);name=(.+);base64,(.*)/;
    const parts = imageFile.match(regex);
    const ext = parts[1];
    const base64Data = parts[3];
    const filename = `${id}.${ext}`;
    const filepath = `../public/avatars/${filename}`;
    const outputFile = path.resolve(__dirname, filepath);

    fs.writeFile(outputFile, base64Data, 'base64', err => {
      if (err) {
        console.log(err);
      } else {
        req.body.avatar = filename;
        delete req.body.imageFile;
      }
      next();
    });
  } else {
    next();
  }
};
