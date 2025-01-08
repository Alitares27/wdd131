let varname = "Aldair Payehuanca";
document.getElementById("title").innerHTML = varname;

const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("modification").innerHTML = lastModified;