// Promise.race() – First Server Response
const promise = Promise.race([
    Promise.resolve("Server 1 Response"),
    Promise.resolve("Server 2 Response")
]);
promise.then((result) => {
    console.log(result);
});