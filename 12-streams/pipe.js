// Stream – Copy File Using pipe()
const fs = require('fs');
const read = fs.createReadStream('hello.txt');
const stream = fs.createWriteStream('output.txt');
read.pipe(stream);

// Stream – Copy Input File to Output File
const fs = require('fs');
const read = fs.createReadStream("input.txt");
const write = fs.createWriteStream("output.txt");
read.pipe(write);

// Stream – File Copy with finish Event
const fs = require('fs');
const read = fs.createReadStream("input.txt");
const write = fs.createWriteStream("output.txt");
read.pipe(write);
write.on('finish', () => {
    console.log("File Copy Completed");
});

// Stream – Copy File Using Data Event
const fs = require('fs');
const read = fs.createReadStream('hello.txt');
const stream = fs.createWriteStream('copy.txt');
read.on('data', (chunk) => {
    stream.write(chunk);
});
read.on('end', () => {
    stream.end();
    console.log("File Copy Completed")
});
