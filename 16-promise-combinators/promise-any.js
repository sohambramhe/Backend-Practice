// Promise.any() – First Successful Server
const promise = Promise.any([
    Promise.reject("Server 1 Failed"),
    Promise.resolve("Server 2 Success"),
    Promise.resolve("Server 3 Success")
]);
promise.then((result) => {
    console.log(result);
});