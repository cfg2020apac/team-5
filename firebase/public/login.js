async function init() {
    const loginform = document.getElementById("login");
    loginform.onsubmit = (e) => {
        e.preventDefault();
        const email = loginform["email"].value;
        const password = loginform["password"].value;
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            return firebase.auth().signInWithEmailAndPassword(email, password)
                .then(data => {
                    return data.user.getIdToken();
                })
                .then(token => {
                    console.log(token);
                    location.href = "activities/allActivities.html";
                })
                .catch(err => {
                    console.error(err);
                });
        }).catch((error) => {
            console.error(error);
        });
    }
    let user = firebase.auth().currentUser;
    console.log(user);
}

init();
