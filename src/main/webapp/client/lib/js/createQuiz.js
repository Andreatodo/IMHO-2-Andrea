$("#createQuizBtn").click(function(e){
    e.preventDefault();
    let quiz = {
        quizTitle: $("#title").val(),
        quizDescription: $("#description").val(),
        createdBy: localStorage.getItem("username"),
        courseId: localStorage.getItem("courseID"),
        questionCount: 0,
    };
    console.log(quiz);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/api/quiz/',
        dataType: 'json',
        contentType: 'application/json',
        headers: {"Authorization": localStorage.getItem("token")},
        data: JSON.stringify(quiz),

        success: function (data) {
            $("#error").hide();
            $("#success").empty();
            $("#success").show();
            $("#success").append("<p>Quiz oprettet</p>");
            console.log(data);
        },
        error: function(data){
            $("#error").empty();
            $("#error").show();
            $("#error").append("<p>Quizzen blev ikke oprettet</p>");
        }
    })

});
/* SDK.login(username, password (data, error) => {
 console.log(data);
 }); */