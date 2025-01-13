/* Get Dates*/ 
const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("modification").innerHTML = lastModified;

// toggle menu in small view
const toggleMenu = () => {
    document.getElementById('menu').classList.toggle('open');
}

document.getElementById('toggleMenu').addEventListener('click', toggleMenu);