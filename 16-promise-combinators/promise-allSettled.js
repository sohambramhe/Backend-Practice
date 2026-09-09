// Promise.allSettled() – Mixed Success/Failure
const promise = Promise.allSettled([
    Promise.resolve("User Found"),
    Promise.reject("Orders Failed"),
    Promise.resolve("Products Found"),
]);
promise.then((result) => {
    console.log(result);
});
