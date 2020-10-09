getAllActivities().then(activities => {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var page_number = urlParams.get('page_number')

    console.log(page_number);
    if(page_number==null){
        page_number = 1;
    }
    page_number = page_number - 1;
    for(i = page_number*3; i < page_number*3+3 ; i++){
        document.write("<div class='card'>");
        // document.write("<div class='card-header'>"+i+"</div>");
        document.write("<div class='card-body'>");
        document.write("<h5 class='card-body'>"+activities[i]["name"]+"</h5>");
        document.write("<p class='card-text'>"+activities[i]["Location"]+"</p>");
        document.write("<p class='card-text'>"+activities[i]["startBy"]+"</p>");
        document.write("<a href='./viewActivity/"+activity_id+" class = 'btn btn-primary' style='float:right;'> View </a></div></div>");
        document.write("<br/>");
    }

    no_of_pages = Math.ceil(activities.length/3);
    document.write("<div class='container'>");
    document.write("<ul class = 'pagination'>");
    for(j=1;j<=no_of_pages;j++){
        document.write("<li><a href='./allActivities.html?page_number="+j+"'>"+j+"</a></li>");
    }
    document.write("</ul></div>");
});
