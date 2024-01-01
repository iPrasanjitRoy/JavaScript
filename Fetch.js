
async function getUsers() {
    try {
        const response = await fetch('https://api.github.com/users/iPrasanjitRoy');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}
getUsers()
/*--------------------------------------*/

fetch('https://api.github.com/users/iPrasanjitRoy')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

/*--------------------------------------*/
