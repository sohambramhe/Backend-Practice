// Buffer – String to Buffer Conversion
const data = Buffer.from("Hello Node.js");
console.log("Buffer: ", data);
console.log("String: ", data.toString());
console.log("Length: ", data.length);

// Buffer – Allocate Memory
const data = Buffer.alloc(10);
console.log("Buffer: ", data);

// Buffer – Write Data into Buffer
const data = Buffer.alloc(20)
data.write("MERN Developer");
console.log(data.toString());

// Buffer – Access Buffer Bytes
const buffer = Buffer.from("Node.js");
console.log("First byte", buffer[0]);
console.log("Second byte", buffer[1]);
console.log("Complete string", buffer.toString());

// Buffer – String ↔ Buffer Conversion
const text = "Learning Node.js";
const buffer = Buffer.from(text);
console.log("Original:", text);
console.log("Buffer:", buffer);
console.log("Converted:", buffer.toString());
console.log("Length:", buffer.length);