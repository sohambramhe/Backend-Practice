// Promise – Login with then()
const promise = new Promise((resolve, reject) => {
    resolve("User Login Successful");
});
promise.then((result) => {
    console.log(result);
});
promise.finally(() => {
    console.log("Login Process Completed");
});

// Promise – Payment with then/catch/finally
const promise = new Promise((resolve, reject) => {
    resolve("Payment Successful");
});
promise.then((result) => {
    console.log(result);
});
promise.catch((err) => {
    console.log(err);
});
promise.finally(() => {
    console.log("Payment Process Completed");
});

// Promise – Payment Failure Handling
const promise = new Promise((resolve, reject) => {
    reject("Payment Failed");
});
promise.then((result) => {
    console.log(result);
});
promise.catch((err) => {
    console.log(err);
});
promise.finally(() => {
    console.log("Payment Process Completed");
});

// Promise Chaining – Login → Welcome
const promise = Promise.resolve("User Logged In");
promise
    .then((result) => {
        console.log(result);
        return "Welcome User";
    })
    .then((result) => {
        console.log(result);
    });

// Promise Chaining – Order → Payment → Confirmation
const promise = Promise.resolve("Order Received");
promise
    .then((result) => {
        console.log(result);
        return "Payment Processing";
    })
    .then((result) => {
        console.log(result);
        return "Order Confirmed";
    })
    .then((result) => {
        console.log(result);
    })

// Promise Chaining – Login → User Data 
const promise = Promise.resolve("Login Successful");
promise
    .then((result) => {
        console.log(result);
        return "Fetching User Data"
    })
    .then((result) => {
        console.log(result);
        return "User Data Received"
    })
    .then((result) => {
        console.log(result);
        return "Welcome User"
    })
    .then((result) => {
        console.log(result);
    })

// Promise Chaining – Product → Cart → Payment → Order
const promise = Promise.resolve("Product Selected");
promise
    .then((result) => {
        console.log(result);
        return "Adding To Cart"
    })
    .then((result) => {
        console.log(result);
        return "Payment Processing"
    })
    .then((result) => {
        console.log(result);
        return "Order Placed"
    })
    .then((result) => {
        console.log(result);
        return "Order Completed"
    })
    .then((result) => {
        console.log(result);
    });

// Promise Chaining – User → Orders
const promise = Promise.resolve("User Login");
promise
    .then((result) => {
        console.log(result);
        return "Fetching User";
    })
    .then((result) => {
        console.log(result);
        return "User Found";
    })
    .then((result) => {
        console.log(result);
        return "Fetching Orders";
    })
    .then((result) => {
        console.log(result);
        return "Orders Found";
    })
    .then((result) => {
        console.log(result);
    })