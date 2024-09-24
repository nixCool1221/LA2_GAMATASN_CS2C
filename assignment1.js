var name = "[James Galdo] ";
var bdate = "[April 28, 2004] ";
var bplace = "[City of Candon Hospital, Candon City,Philippines 2710]";
var address = "[San Jose,Candon City,Philippines 2710] ";
var course = "[bachelor of science and computer science ]";
var dream = "[Computer Engineer]"
var upper = name.toUpperCase();
var lower = name.toLowerCase();
var addressupper =address.toLocaleUpperCase();
var bplaceupper = bplace.toLocaleUpperCase();

var studentinfo = upper + "was born " + bdate + "at " + bplaceupper + ", and currently living at " + addressupper + ", " + lower + "is taking up " + course + "and dreams to be " + dream + "after graduation";
console.log(studentinfo);