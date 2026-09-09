// Promise – Resolve Successful Task
const promise = new Promise((resolve, reject) => {
    resolve("Task Successful");
});
promise.then((result) => {
    console.log(result);
});

// Promise – Reject Failed Task
const promise = new Promise((resolve, reject) => {
    reject("Task Failed");
});
promise.catch((err) => {
    console.log(err);
});