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
                return moment(time).format("dddd, MMMM Do YYYY");
            });
            
            Handlebars.registerHelper('postsToday', function(){
                var yesterday = (new Date).getTime() - (86400000);
                var query = {condition: "created >= " + yesterday};
                var addedPosts = Backendless.Persistence.of(Posts).find(query);
                console.log(addedPosts);
                console.log(yesterday);
                return addedPosts.data.length;

            });
            
            var blogScript = $("#blogs-template").html();
            var blogTemplate = Handlebars.compile(blogScript);
            var blogHTML = blogTemplate(wrapper);
            
            $(".main-container").html(blogHTML);
            
            var blogScriptBadge = $("#today-template").html();
            var blogTemplateBadge = Handlebars.compile(blogScriptBadge);
            var blogHTMLBadge = blogTemplateBadge(wrapper);
            
            $("#todayo").html(blogHTMLBadge);
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

    
 
 

        
