var activities = []

getAllActivities().then(async activities => {
    const isAdmin = await verifyAdmin(userId);

    if (isAdmin) {
        document.getElementById("option3").classList.remove("hidden");
        document.getElementById("option2").classList.add("hidden");
    }

    let currPath = window.location.href
    console.log(currPath)
    var idx = currPath.indexOf("?")
    let isViewAll;
    if (idx > 0) {
        isViewAll = window.location.href.substr(window.location.href.indexOf("?") + 1) === "viewAll"
    } else {
        isViewAll = true
    }
    var table = document.getElementById("part-list");

    if (isViewAll) {
        document.getElementById("option1").setAttribute("checked", "checked");
        document.getElementById("option2").removeAttribute("checked");

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
        document.getElementById("option1").removeAttribute("checked");
        document.getElementById("option2").setAttribute("checked", "checked");

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
        currPath = currPath.substr(0, idx)
    }
    window.location.replace(currPath + "?viewAll");
}

function viewAllMyActivities() {
    let currPath = window.location.href
    var idx = currPath.indexOf("?")
    if (idx > 0) {
        currPath = currPath.substr(0, idx)
    }
    window.location.replace(currPath + "?viewMy");
}

function doCreateActivity() {
    let currPath = window.location.href
    currPath = currPath.substr(0, currPath.lastIndexOf('/'))
    currPath = currPath + "/createActivity/createActivity.html"
    window.location.replace(currPath);
}
