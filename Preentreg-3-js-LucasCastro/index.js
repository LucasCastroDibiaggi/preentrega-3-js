
const BtnBotones = document.getElementById("BtnBotones");
const botones = document.getElementById("botones");
const fondo = document.getElementById("fondo");

(()=>{

BtnBotones.addEventListener("click", agregarbotones);
botones.addEventListener("click", delegacion);

})();    

(()=>{


const color = localStorage.getItem("colorfondo");
if(color === null){
    fondo.className = "bg-danger";
}else{
    fondo.className = color;
}    

})();      

function delegacion(e){
    e.preventDefault();
    const colorBoton = e.target.classList[1];

    switch(colorBoton){

    case ("btn-primary"):
    fondo.className="bg-primary";   
    localStorage.setItem("colorfondo", "bg-primary");  
    break;

    case("btn-secondary"):
    fondo.className="bg-secondary";
    localStorage.setItem("colorfondo", "bg-secondary");
    break;

    case ("btn-danger"):
    fondo.className="bg-danger";   
    localStorage.setItem("colorfondo", "bg-danger"); 
    break;

    case ("btn-success"):
    fondo.className="bg-success";
    localStorage.setItem("colorfondo", "bg-success");
    break;

    case("btn-warning"):
    fondo.className=("bg-warning");
    localStorage.setItem("colorfondo", "bg-warning");
    break;
    }
}


function agregarbotones(e){
    e.preventDefault();
    botones.innerHTML = `<button class="btn btn-primary">Boton 1</button>
    <button class="btn btn-secondary">Boton 2</button>
    <button class="btn btn-danger">Boton 3</button>
    <button class="btn btn-success">Boton 4</button>
    <button class="btn btn-warning">Boton 5</button> `;
}