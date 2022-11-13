const navLinks = [...document.querySelectorAll("nav a")]
const sections = [...document.querySelectorAll("section")]
const pageHeight = window.innerHeight;



let sectionsPosition;

function positionCalculation(){
    sectionsPosition = sections.map(section => section.offsetTop)
}
positionCalculation()
console.log(sectionsPosition);

navLinks.forEach(link => link.addEventListener("click", addScrollSmooth))

function addScrollSmooth(e){
    const linkIndex = navLinks.indexOf(e.target);
    window.scrollTo({
        top: sectionsPosition[linkIndex],
        behavior: "smooth"
    })
}

window.addEventListener("resize", positionCalculation)
/*hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh*/


let nav = document.getElementById("nav")


if (topPos > pageHeight ){
    console.log("edcd")
}
/*hhhhhhhhhhhhhhhhhhhhhhhhhh pour carousel  hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh*/
