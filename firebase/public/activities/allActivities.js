var activities = []

getAllActivities().then(activities => {
    let isViewAll = window.location.href.substr(window.location.href.indexOf("?") + 1) === "viewAll"

    var table = document.getElementById("part-list");

    if (isViewAll) {
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
        document.getElementById("sign-up-btn").classList.remove("btn-danger");
        document.getElementById("sign-up-btn").innerHTML = "Sign Up";

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
    let currPath = window.location.href
    var idx = currPath.indexOf("?")
    if (idx > 0) {
        currPath = currPath.substr(0, idx - 1)
        window.location.replace(currPath + "?viewAll");
    } else {
        window.location.replace(currPath + "?viewAll");
    }
    location.reload();

    var old_tbody = document.getElementById('tbody');
    var new_tbody = document.createElement('tbody');
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
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
}

function viewAllMyActivities() {
    let currPath = window.location.href
    var idx = currPath.indexOf("?")
    if (idx > 0) {
        currPath = currPath.substr(0, idx - 1)
        window.location.replace(currPath + "?viewMy");
    } else {
        window.location.replace(currPath + "?viewMy");
    }
    location.reload();

    var old_tbody = document.getElementById('tbody');
    var new_tbody = document.createElement('tbody');
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
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
}