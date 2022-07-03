const sections= document.querySelectorAll("#section_symbol");
console.log(sections)
function setSectionActive(name_section){
    sections.forEach((section)=>{
        if(name_section===section.getAttribute("title")){
            section.classList.toggle('active')
        }
        else{
            section.classList.remove('active')
        }
    })
}

