app.directive("attrType",attrType);
function attrType() {
    return{
        restrict:"A",
        template:"<div class='jumbotron'><b style='color: red'>Attribute Type Custom Directive</b></div>"
    }
}