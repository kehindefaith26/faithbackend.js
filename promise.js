const promise = new Promise((resolve, reject) => {
    const success = true;

    setTimeout (() => {
        if(success) {
            resolve('Data fetched successfully!');
        } else {
            reject('Error fetching data');
    
        }
    }, 2000);
});

//Handling the promise

promise 
    .then((data) => {
        console.log(data);//logs: 'Data fetched successfully'
    })

    .catch((error) => {
        console.log(error); //logs: 'Error fetching data'
    });
