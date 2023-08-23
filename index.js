// Add your code here

function submitData(userName, userEmail) {
    const formData = {
        userName: userName,
        email: userEmail,
    };
    const configuration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData),
    }
    fetch("http://localhost:3000/users", configuration).then((response) => {
        return response.json();
    }).then((object) => {
        console.log(object);
        let h = document.createElement('H2');
        let s = document.getElementById('s');
        h.innerHTML = object.id;
        s.appendChild(h);

    }).catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    });

}
submitData('Sami', 'samihassen@gmail.com')