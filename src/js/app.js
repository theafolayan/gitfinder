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
        $('#profile').html(
            `<div class="card col s12 m8 offset-m2 l6 offset-l3">
            <div class="card-image waves-effect waves-block waves-light">
              <img style="width:200px" class="circle responsive-img activator" src= "${user.avatar_url}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${user.name}<i class="material-icons right">more_vert</i></span>
              <p>Visit <a href="${user.html_url}">${user.name}'s Profile On Github</a></p>
            </div>
            <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">${user.name}'s Bio<i class="material-icons right">close</i></span>
              <p>${user.bio}</p>
            </div>
          </div>
                    

            `)
    })
})
});
