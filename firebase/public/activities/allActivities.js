var activities = []

getAllActivities().then(activities => {
    let currPath = window.location.href
    console.log(currPath)
    var idx = currPath.indexOf("?")
    let isViewAll;
    if (idx > 0) {
        isViewAll = window.location.href.substr(window.location.href.indexOf("?") + 1) === "viewAll"
    } else {
        isViewAll = true
    }
    console.log(isViewAll)
    var table = document.getElementById("part-list");

    if (isViewAll) {
        document.getElementById("option1").checked = true;
        document.getElementById("option2").checked = false;

        for (i = activities.length - 1; i >= 0; i--) {
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = i;
            cell2.innerHTML = activities[i].name;
            cell3.innerHTML = activities[i].startBy;
            cell4.innerHTML = "<a href='" + "viewActivity/viewActivity.html?" + activities[i].id + "'>View</a>"
        }
    } else {
        document.getElementById("option1").checked = false;
        document.getElementById("option2").checked = true;

        for (i = activities.length - 1; i >= 0; i--) {
            if (activities[i].participants) {
                if (activities[i].participants.includes(userId)) {
                    var row = table.insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    cell1.innerHTML = i;
                    cell2.innerHTML = activities[i].name;
                    cell3.innerHTML = activities[i].startBy;
                    cell4.innerHTML = "<a href='" + "viewActivity/viewActivity.html?" + activities[i].id + "'>View</a>"
                }
            }
        }
    }
});

function viewAllActivities() {
    window.location.replace(window.location.href + "?viewAll");
    location.reload();
}

function viewAllMyActivities() {
    window.location.replace(window.location.href + "?viewMy");
    location.reload();
}
