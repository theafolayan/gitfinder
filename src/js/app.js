$(document).ready(function(){
$('#searchUser').on('keyup', function(e){
    let username= e.target.value;

    //make a request to github 
    $.ajax({
        url: "https://api.github.com/users/"+username,
        data:{
            client_id:'71b4e60e0fd10a51e6da',
            client_secret: '80711b3df61bc33c45a5e294184b8e110edf7142'
            }

    }).done(function(user){
        console.log(user);
    })
})
});