/** 99% of this stuff just copied and pasted from soran's and my lab 7, can be changed & used for our form 
* Error alert pops up every time page is reloaded and I don't know why, "[object HTMLDocument] does not exist" 

/* idk what this does so i take it outs for now
$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color","#cccccc");
  });
  $("input").blur(function(){
    $(this).css("background-color","#ffffff");
  });
});
*/

/* helper function for getting element */
function $(id) {
    var element = document.getElementById(id);
    if (element === null) 
        alert ('Programmer error: ' + id + ' does not exist.');
    return element;
}

/* validator for select-list */
function testPositionValid(id) {
    return ($(id).selectedIndex !== 0);
}

/* warning for select-list */
function warnPositionInvalid(id) {
    if (!testPositionValid(id)) 
        alert ("You must select a position.");
}

/* validator for radio buttons, also warns if user says they did not pass Comp1536 */
function testRadio(id) {
    var formValid = false;
    if ($(id).checked) {
        formValid = true;
        if ($(id).value == "no") {
        alert ("You will not be considered if you have not passed this course.");
        }
    }
    return formValid;                
}

/* warning for radio buttons */
function warnTestIfPassed(id) {
    if (!testRadio(id))
        alert ("You must check an option.");
}

/* validator for earliest start date */
function testDateValid(month, day, year) {
    if ($(month).value !== "" && $(day).value !== "" && $(year).value !== "") {
        return !($(month).value < 1 || $(month).value > 12 || $(day).value < 1 || $(day).value > 31 || $(year).value < 2013 || $(year).value > 2999);
        }
    return true;
}

/* warning for earliest start date */    
function warnDateInvalid(month, day, year) {
    if (!testDateValid(month, day, year))
        alert ("Invalid date.\nMonth must be in range of (1-12) \nDay must be in range of (1-31) \nYear must be in range of (2013-2999)");
}

/*validator for attach resume */
function testResumeValid(id) {
    var str = $(id).value;
    if (str !== "")
        return ((str.substring(str.length-3) == "doc" || str.substring(str.length-4) == "docx" || str.substring(str.length-3) == "pdf"));
    return true;
}

/* warning for attach resume */
function warnResumeInvalid(id) {
    if (!testResumeValid(id))
        alert ("You submitted " + $(id).value + "\nPlease submit a valid file type (doc, docx, pdf)");
}

/* validator for name */
function testNameValid(first, last) {
    return ($(first).value.length !== 0 && $(last).value.length !== 0);
}

/* warning for name */ 
function warnNameInvalid(first, last) {
    if (!testNameValid(first, last)) 
        alert ("First name and last name must not be blank.");
}

/* validator for email */
function testEmailValid(id) {
    var str = $(id).value;
    if (str !== "")
        return ((str.substring(str.length-4) == ".com" || str.substring(str.length-3) == ".ca" || str.substring(str.length-4) == ".org"));
    return false;
}

/* warning for email */
function warnEmailInvalid(id) {
    if (!testEmailValid(id))
        alert ("Email must not be blank and have a valid suffix (.com, .ca, .org)");
}

/* validator for phone */
function testPhoneValid(phone1, phone2, phone3) {
    if ($(phone1).value !== "" && $(phone2).value !== "" && $(phone3).value !== "") {
        return !($(phone1).value < 100 || $(phone1).value > 999 || $(phone2).value < 100 || $(phone2).value > 999 || $(phone3).value < 1000 || $(phone3).value > 9999);
        }
    return true;
}

/* warning for phone */
function warnPhoneInvalid(phone1, phone2, phone3) {
    if (!testPhoneValid(phone1, phone2, phone3))
        alert ("Phone number format is xxx-xxxx-xxxx using digits 0-9.\nxxx component must be between (100-999).\nxxxx component must be between (1000-9999).");
}
     

/* validator to check that emails match, regardless of case */
function confirmValues(id1, id2, message) {
    var value1 = $(id1).value;
    var value2 = $(id2).value;
    if(value1 !== value2) {
        alert(message + 's do not match. Please re-enter your ' + message + '.');
    }

}