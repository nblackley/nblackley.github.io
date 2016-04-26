function redirect(){
        var input=document.getElementById("input").value.toLowerCase();
        var redirect="";
        switch(input){
            case "i am cheg":
                redirect="http://megan.tech"
                break;
            case "home":
                redirect="/index.html"
                break;
            case "texas":
                redirect="http://utexas.edu"
                break;
            case "michael":
                redirect="/jokes/Michael/michael.html"
                break;
            case "call me":
                redirect="http://hayleycall.me"
                break;
            case "lucifer":
                redirect="http://www.lucymaude.com"
                break;
            case "space":
                $("#spaceship").animate({top: "100%"},10000);
                break;
            case "under the bridge":
                redirect="http://freetailhackers.com"
                break;
            case "uranus":
                document.getElementById("invalid").innerHTML = "lol u thought";
                break;
            case "west":
                redirect="http://kanyewest.com"
                break;
            default:
                document.getElementById("invalid").innerHTML = "I can't find where that is.";
        }
        if(redirect!=""){
            window.location=redirect;
        }
}