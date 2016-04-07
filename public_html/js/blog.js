$(function (){
    var APPLICATION_ID = "7B3ED48F-7D48-97AC-FFF1-5C3668EC8800",
        SECRET_KEY = "5A4ACFAD-0153-90D1-FF3A-EF8D441A4300",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        
        var postsCollection = Backendless.Persistence.of(Posts).find();
        
        console.log(postsCollection);
        
        var wrapper = {
                posts: postsCollection.data
            };
            
            Handlebars.registerHelper("format", function (time) {
                return moment(time).format("dddd, MMMM Do YYYY")
            });
            
            var blogScript = $("#blogs-template").html();
            var blogTemplate = Handlebars.compile(blogScript);
            var blogHTML = blogTemplate(wrapper);
            
            $(".main-container").html(blogHTML);
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

