$(function (){
    var APPLICATION_ID = "7B3ED48F-7D48-97AC-FFF1-5C3668EC8800",
        SECRET_KEY = "5A4ACFAD-0153-90D1-FF3A-EF8D441A4300",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        
        var dataStore = Backendless.Persistence.of(Posts);
        var post  = new Posts({title: "My Fisrt Blog Post", content:"My first blog post content", authorEmail:"email@email.com"});
        dataStore.save(post);
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

