// async/await – Login Error Handling
async function loginUser() {
    try {
        const user = await Promise.reject("Login Failed");
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}
loginUser();

// async/await – Get User with try/catch
async function getUser() {
    try {
        const name = await Promise.resolve("User Found");
        console.log(name);
    } catch (error) {
        console.log(error);
    }
}
getUser();

// async/await – Payment Error + finally
async function processPayment() {
    try {
        const rej = await Promise.reject("Payment Failed");
        console.log(rej);
    } catch (error) {
        console.log(error);
    }
    finally {
        console.log("Payment Process Completed");
    }
}
processPayment();

// async/await – Order + finally
async function placeOrder() {
    try {
        const order = await Promise.resolve("Order Recived");
        console.log(order);
    } catch (error) {
        console.log(error);
    }
    finally {
        console.log("Order Process Completed");
    }
}
placeOrder();

// async/await – User Registration + finally
async function userRegistration() {
    try {
        const register = await Promise.resolve("User Registered");
        console.log(register);
    } catch (error) {
        console.log(error);
    }
    finally {
        console.log("Registration Process Completed");
    }
}
userRegistration();