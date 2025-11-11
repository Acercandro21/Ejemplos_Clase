//Iteraciones 

const cielo = document.getElementById("cielo");

for(let i=0; i<5; i++){
    cielo.innerHTML += "⭐";
}

// eventos 
const cielo2 = document.getElementById("cielo2");

const btnEstrella = document.getElementById("btnEstrella");

btnEstrella.addEventListener("click" ,()=> {
    cielo2.innerHTML += "⭐";
})

const btnPlaneta = document.getElementById("btnPlaneta");
btnPlaneta.addEventListener("dblclick" ,()=>{
    cielo2.innerHTML +="🪐";
})

const inputEmoji = document.getElementById("inputEmoji");

const btnAgregarEmoji = document.getElementById("btnAgregarEmoji");

btnAgregarEmoji.addEventListener("click", ()=>{
    var emoji = inputEmoji.value.trim();
    if (emoji) cielo.innerHTML += emoji;
    inputEmoji.value="";
})

inputEmoji.addEventListener("keydown", e =>{
    if(e.key==="Escape") cielo.innerHTML="";
})