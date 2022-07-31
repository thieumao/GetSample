import fs from "fs";
import fetch from "node-fetch";

fetch(`http://abc.com/xyz.json`, {
  method: "GET",
  headers: {
    'ABC': 'XYZ', // change another header if you need
  },
})
  .then(response => {
    if (response) {
      fs.writeFile("./data/abc.txt", JSON.stringify(response), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
      }); 
    } else {
      console.log("Empty Data");
    }
  })

  .catch(error => {
    console.log(error)
  });