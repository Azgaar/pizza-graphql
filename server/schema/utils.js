const fs = require("fs");

const addToFile = (file, newData) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const updatedData = [...JSON.parse(data), newData];
      fs.writeFile(file, JSON.stringify(updatedData), err => {
        if (err) {
          console.error(err);
        }
      });
    }
  });
};

module.exports = addToFile;
