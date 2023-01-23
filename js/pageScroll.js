

function inicia(){
 document.getElementById('btn_go_to_skills').addEventListener('click',scroll);
 document.getElementById('btn_go_to_projects').addEventListener('click',scroll);
 document.getElementById('btn_go_to_contacts').addEventListener('click',scroll);
 document.getElementById('btn_go_to_skills').addEventListener('click',scroll);
 document.getElementById('btn_go_to_skills').addEventListener('click',scroll);
}

window.addEventListener('load',inicia);

function scroll(){
    // Obtém a seção alvo
 var target = document.getElementById("home_section");
 // Faz a página deslizar até a seção alvo
 target.scrollIntoView({ behavior: 'smooth' });
}

function scrollToHome(){
    // Obtém a seção alvo
 var target = document.getElementById("home_section");
 // Faz a página deslizar até a seção alvo
 target.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSkills(){
    // Obtém a seção alvo
 var target = document.getElementById("skills_section");
 // Faz a página deslizar até a seção alvo
 target.scrollIntoView({ behavior: 'smooth' });
}

document.getElementsByClassName("go_to_skills").addEventListener("click", function() {
       scrollToSkills();
 });