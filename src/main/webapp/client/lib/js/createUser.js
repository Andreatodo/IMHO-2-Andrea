

$("#createUserBtn").click(function(e){
    e.preventDefault();
    if($("#password").val() !== $("#passwordAgain").val()){
        $("#error").empty();
        $("#error").show();
        $("#error").append("<p>Passwords matcher ikke</p>");
        return;
    }
    let user = {
        username: $("#username").val(),
        password: $("#password").val()
    };
    console.log(user);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/api/user/signup',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(user),

        success: function (data) {
            $("#error").hide();
            $("#success").empty();
            $("#success").show();
            $("#success").append("<p>Brugeren er nu oprettet. Du kan logge ind her: <a href='index.html'>Login</a></p>");
            console.log(data);
        },
        error: function(data){
            $("#error").empty();
            $("#error").show();
            $("#error").append("<p>Brugernavnet er optaget</p>");
        }
    })

});
/* SDK.login(username, password (data, error) => {
 console.log(data);
 }); */