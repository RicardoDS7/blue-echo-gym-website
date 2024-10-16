const fs = require('fs');
const filePath = './out/.nojekyll';

fs.writeFile(filePath, '', function (err) {
  if (err) {
    console.log('Error creating .nojekyll file', err);
  } else {
    console.log('.nojekyll file created successfully');
  }
});
