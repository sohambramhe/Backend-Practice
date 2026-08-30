// fs.writeFileSync() – Create File
const fs = require('fs');
fs.writeFileSync("hello.txt", "Hello Node.js");
console.log("file created");

// fs.readFile() – Read File
const fs = require("fs");
fs.readFile("hello.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});

// fs.readFile() + fs.writeFile()
const fs = require('fs');
fs.readFile("hello.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

fs.writeFile("data.txt", "I am learning Node.js", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File Updated");
});

// fs.appendFile() – Append File
fs.appendFile("log.txt", "Server Started", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("append file");
});

// fs.writeFile() + fs.readFile() – Write & Read
const fs = require("fs");
fs.writeFile(
    "user.txt",
    "Name: Soham\nRole: MERN Developer",
    (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Write File");

        fs.readFile("user.txt", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log(data);
        });
    }
);
