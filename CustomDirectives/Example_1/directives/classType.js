app.directive("classType",classType);
function classType() {
    return{
        restrict:"C",
        template:"<div class='jumbotron'><b>Class Type Custom Directive !</b></div>"
    }
}