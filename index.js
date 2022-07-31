const fs = require("fs");

fetch(`http://abc.com/xyz.json`, {
  method: "GET",
  headers: {
    'ABC': 'XYZ', // change another header if you need
  },
})
  .then(response => {
    return response.json()
  })
  .then(json => {
    console.log(json);
    fs.writeFile(`./data/abc.txt`, json, (err) => {
      if (err) {
        console.log(`Error writing file with error = `, err);
      } else {
        console.log(`Successfully wrote file`);
      }
    });
  })
  .catch(error => {
    console.log(error)
  });