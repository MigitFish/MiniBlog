$(function (){
    var APPLICATION_ID = "7B3ED48F-7D48-97AC-FFF1-5C3668EC8800",
        SECRET_KEY = "5A4ACFAD-0153-90D1-FF3A-EF8D441A4300",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        
        var user = new Backendless.User();
        user.email = "nielsencannon14@yahoo.com",
        user.passwrod = "password";
        Backendless.UserService.register(user);
})

