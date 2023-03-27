// Add your code here
// fetch("http://localhost:3000/dogs", newPup); {
//     const newPup = {method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
// // }

// };
// fetch("http://localhost:3000/dogs", newPup);

function submitData(userName, userEmail) {
    fetch("http://localhost:3000/users", newUser); {
        const newUser = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                name: userName,
                email: userEmail,
            }),
        }
        console.log(newUser);
    }
    return fetch("http://localhost:3000/users", newUser);
}