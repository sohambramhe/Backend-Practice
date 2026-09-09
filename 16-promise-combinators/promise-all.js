// Promise.all() – User/Order/Product Data
const promise = Promise.all([
    Promise.resolve("User Data"),
    Promise.resolve("Order Data"),
    Promise.resolve("Product Data")
]);
promise.then((result) => {
    console.log(result);
});

// Promise.all() – Multiple Data Requests
const promise = Promise.all([
    Promise.resolve("User Found"),
    Promise.resolve("Orders Found"),
    Promise.resolve("Products Found"),
]);
promise.then((result) => {
    console.log(result);
});