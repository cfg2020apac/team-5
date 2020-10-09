//var sample = [
//{ name: "John Doe", image: "https://picsum.photos/200/200", joinedSince: "18-02-2020", numberOfActivitiesAttended: 50, attendanceRatio: 0.5 },
//{ name: "Jackson Mah", image: "https://picsum.photos/200/200", joinedSince: "05-10-2019", numberOfActivitiesAttended: 10, attendanceRatio: 0.6 },
//{ name: "Michael A", image: "https://picsum.photos/200/200", joinedSince: "07-08-2018", numberOfActivitiesAttended: 20, attendanceRatio: 0.9 },
//{ name: "Michael B", image: "https://picsum.photos/200/200", joinedSince: "07-06-2020", numberOfActivitiesAttended: 16, attendanceRatio: 1.0 },
//{ name: "Michael C", image: "https://picsum.photos/200/200", joinedSince: "07-09-2020", numberOfActivitiesAttended: 15, attendanceRatio: 0.3 },
//{ name: "Michael D", image: "https://picsum.photos/200/200", joinedSince: "07-10-2018", numberOfActivitiesAttended: 28, attendanceRatio: 0.7 },
//{ name: "Michael E", image: "https://picsum.photos/200/200", joinedSince: "07-02-2019", numberOfActivitiesAttended: 2, attendanceRatio: 0.2 }
//];

async function renderList(userId, activityId) {
    persons = await viewSignups(activityId);
    for (i = 0; i < persons.length; i++) {
        document.getElementById("part-list").innerHTML += '<tr><th scope="row">' + (i + 1) + '</th><td scope="row">' + persons[i].name + '</td><td scope="row">' + persons[i].email + '</td></tr>';
    }
}

window.onload = async() => {
    let activityId = window.location.href.substr(window.location.href.indexOf("?") + 1)
    await renderList(userId, activityId);
};