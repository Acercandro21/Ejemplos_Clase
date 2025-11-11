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

    contenedor.appendChild(card);
});