var courseID = localStorage.getItem("courseID");
$.ajax({
    type: 'GET',
    url: 'http://localhost:8080/api/quiz/' + courseID,
    dataType: 'json',
    //whatever you need
    headers: {"Authorization": localStorage.getItem("token")},
    success: function (data, textStatus, jqXHR) {
        if(jqXHR.status === 204){
            $(".content").append("<li>Der er ingen quizzes til det givne fag</li>");
            return;
        }
        var jsonData = JSON.parse(data);
        console.log(jsonData);
        $.each(jsonData, function(i, item) {
            console.log(jsonData[i]);
            if(typeof jsonData[i].quizTitle != 'undefined'){
                $(".content").append("<li>" + jsonData[i].quizTitle + "</li>");
            }
        });
    }
});