async function greetAfterDelay() {
    console.log('Fetching greeting...'); //step 1: Notify the start of the fuction
    
    //use 'await ' to pause until the promise resolves

    const greeting = await new Promise(function(resolve) {
        setTimeout(function(){
            resolve('Hello, Faith');
    }, 2000); //simulate a 2-second delay
})

    console.log(greeting); //step 2: logs the resolved value
}

greetAfterDelay();