$(function (){
    var APPLICATION_ID = "7B3ED48F-7D48-97AC-FFF1-5C3668EC8800",
        SECRET_KEY = "5A4ACFAD-0153-90D1-FF3A-EF8D441A4300",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        if(Backendless.UserService.isValidLogin()){
            userLoggedIn(Backendless.LocalCage.get("current-user-id"));
        }
        else{
            var loginScript = $("#login-template").html();
            var loginTemplate = Handlebars.compile(loginScript);
            
            $(".main-container").html(loginTemplate);
        }
        
            $(document).on("submit", '.form-signin', function(event) {
                event.preventDefault();
                
                var data = $(this).serializeArray(),
                    email = data[0].value,
                    password = data[1].value;
                    
                    Backendless.UserService.login(email, password, true, new Backendless.Async(userLoggedIn, gotError));
            });
            
            $(document).on('click', '.add-blog', function () {
                var addBlogScript = $("#add-blog-template").html();
                var addBlogTemplate = Handlebars.compile(addBlogScript);
                
                $(".main-container").html(addBlogTemplate);
            });
            
            $(document).on('submit', '.form-add-blog', function (event) {
                event.preventDefault();
                
                var data = $(this).serializeArray(),
                    title = data[0].value,
                    content = data[1].value;
                    
                var dataStore = Backendless.Persistence.of(Posts);
                
                var postObject = new Posts ({
                    title: title,
                    content: content,
                    auhtorEmail: Backendless.UserService.getCurrentUser().email
                });
                
                dataStore.save(postObject);
                
                this.title.value = "";
                this.content.value = "";
            });
            
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

function userLoggedIn (user){
    console.log("user successfully logged in");
    
    var welcomeScript = $('#welcome-template').html();
    var welcomeTemplate = Handlebars.compile(welcomeScript);
    var welcomeHTML = welcomeTemplate(user);
    
    $('.main-container').html(welcomeHTML);
}

function gotError(error) {
    console.log("Error meaasge -" + error.message);
    console.log("Error code - " + error.code);
}

