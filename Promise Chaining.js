const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Prasanjit Roy", password: "12345" });
        } else {
            reject('ERROR: Something Went Wrong');
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log("The Promise Is Either Resolved Or Rejected")); 
