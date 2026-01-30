// READ

const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file");
  } else {
    console.log(data);
  }
});


// WRITE

const fs = require("fs");

fs.writeFile("data.txt", "Hello Node.js", (err) => {
  if (err) {
    console.log("Error writing file");
  } else {
    console.log("File written successfully");
  }
});


// APPEND THE FILE
const fs = require("fs");

fs.appendFile("data.txt", "\nAppended text", (err) => {
  if (err) {
    console.log("Error appending file");
  } else {
    console.log("Data appended");
  }
});



// CREATE THE FILE

const fs = require("fs");

fs.writeFile("newfile.txt", "New file created", (err) => {
  if (err) {
    console.log("Error creating file");
  } else {
    console.log("File created");
  }
});


// DELETE THE FILE 

const fs = require("fs");

fs.unlink("newfile.txt", (err) => {
  if (err) {
    console.log("Error deleting file");
  } else {
    console.log("File deleted");
  }
});

// RENAME THE FILE

const fs = require("fs");

fs.rename("data.txt", "info.txt", (err) => {
  if (err) {
    console.log("Error renaming file");
  } else {
    console.log("File renamed");
  }
});


// MOVE THE FILE

const fs = require("fs");

fs.rename("info.txt", "files/info.txt", (err) => {
  if (err) {
    console.log("Error moving file");
  } else {
    console.log("File moved");
  }
});


//  CHANGE THE FILE PERMISSION

const fs = require("fs");

fs.chmod("files/info.txt", 0o644, (err) => {
  if (err) {
    console.log("Error changing permission");
  } else {
    console.log("File permission changed");
  }
});
