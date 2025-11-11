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


//componente mejorado

const productos = [{nombre:"gato", precio: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnoapaxECTYuNQfL_J-g9GjxfLLne6jWTuw&s"}, {nombre: "perro", precio:10, img:"https://nupec.com/wp-content/uploads/2023/09/brown-chihuahua-2021-08-26-19-05-45-utc.jpg"}];

const contenedor = document.getElementById("contenedor");

productos.forEach( prod =>{
    const card = document.createElement("div");
    card.className="card";

    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}>
            <h3>${prod.nombre}</h3>
            <p>${prod.precio}/p>
            <button>Agregar</button>
    `;
});