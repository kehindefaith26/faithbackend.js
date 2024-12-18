const promise = newPromise((resolve) => {
    resolve(2);
});

promise 
.then ((result) => {
    console.log(result);
    return result * 2;
})

.then ((result) => {
    console.log(result);
    return result * 2; //logs: 4
})

.then ((result) => {
    console.log(result);
    return result * 2; //logs: 8
});