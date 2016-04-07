$(function (){
    var APPLICATION_ID = "7B3ED48F-7D48-97AC-FFF1-5C3668EC8800",
        SECRET_KEY = "5A4ACFAD-0153-90D1-FF3A-EF8D441A4300",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

            var loginScript = $("#login-template").html();
            var loginTemplate = Handlebars.compile(loginScript);
            
            $(".main-container").html(loginTemplate);
            
            $(document).on("submit", '.form-signin', function(event) {
                event.preventDefault();
                
                var data = $(this).serializeArray(),
                    email = data[0].value,
                    password = data[1].vaule;
                    
                    Backendless.UserService.login(email, password, true, new Backendless.Async(userLoggedIn, gotError));
            });
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

