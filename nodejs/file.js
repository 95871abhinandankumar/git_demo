const fs = require("node:fs/promises");

fs.writeFile("data.txt", "data in the file")
  .then((res) => {
    console.log("File created");
  })
  .catch((err) => {
    console.log("File creation failed");
  });
