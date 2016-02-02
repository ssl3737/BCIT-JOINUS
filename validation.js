/** 99% of this stuff just copied and pasted from soran's and my lab 7, can be changed & used for our form 
* Error alert pops up every time page is reloaded and I don't know why, "[object HTMLDocument] does not exist" 

$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color","#cccccc");
        });
    $("input").blur(function(){
        $(this).css("background-color","#ffffff");
    });
});

/^[a-z0-9_-]{3,15}$/ username

/* helper function for getting element */
function $(id) {
    var element = document.getElementById(id);
    if (element === null) 
        alert ('Programmer error: ' + id + ' does not exist.');
    return element;
}

/* function for testing a regular expression against a form input value */
function testRegEx(id, regEx){
    return regEx.test($(id).value);
}

function warnInvalid(id, regEx, message) {
    if (!testRegEx(id, regEx)) {
        alert(message);
    }
} 
                  
                   
/* sets two values to lower case then compares them. if they do not match, alert user */
function confirmValues(id1, id2, message) {
    var value1 = $(id1).value;
    var value2 = $(id2).value;
    if(value1.toLowerCase() !== value2.toLowerCase()) {
        alert(message + 's do not match. Please re-enter your ' + message.toLowerCase() + '.');
    }

}