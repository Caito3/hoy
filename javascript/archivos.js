function traer(){

var dat = document.getElementById("clima")
dat.innerHTML = ""
}

function hacer(ciudad, paises){
    //traemos todas las variables para trabajar con el html
var clima = document.getElementById("clima")
var boton = document.getElementById("boton")
var ciudad = document.getElementById("ciudad").value
var paises = document.getElementById("paises").value

//validamos de que no haya campos vacios
if(ciudad === "" || paises === ""){
    var com = document.getElementById("com")
    com.style.display = "block"
    setTimeout(function(){
        com.style.display = "none"
    },7000)
}
//si no hay campos vacios continuamos con la funcion 
else{

//traemos los datos de nuestra api para mostrar
//usamos las variables de ciudad y paises que fueron escritas por el usario para buscar la ciudad y el pais que queremos

const api = 'abb3c5e4202b40f9bd71a4c7b8c53e86'
const url =`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${paises}&appid=${api}`

fetch(url)
.then(data => {
    return data.json()
})

.then(dataJSON=>{
    //si nos devuelve error lo comunicamos 
    if(dataJSON.cod == '404' ){
        var avisar = document.getElementById("pra")
        avisar.style.display = "block"
        setTimeout(function(){
            avisar.style.display = "none"
        },10000)
    }
        else{
            
        }
    hac(dataJSON)
})
function hac(dataJSON){
    //traemos todos los datos de la ciudad y el pais buscados
    var temp = dataJSON.main.temp
    temp = parseInt(temp -273.15)
    var temp_min = dataJSON.main.temp_min
    temp_min = parseInt(temp_min -273.15)
    var temp_max = dataJSON.main.temp_max
    temp_max = parseInt(temp_max -273.15)
    
    
    
    
    
    
    
    
    
    
    
    
    //mostramos esos datos
    const con = document.createElement('div')
con.innerHTML=`
<h5 class="hoy">Clima en ${dataJSON.name}</h5>
<img id="foto" class="fotos" src="https://openweathermap.org/img/wn/${dataJSON.weather[0].icon}@2x.png">
<h2 id="tem" class="tem">${temp}°C</h2>
<p id="max" class="max">Max: ${temp_max}°C</p>
<p id="temperatura" class="temperatura">Min: ${temp_min}°C</p>
`
clima.appendChild(con)

console.log(dataJSON)
console.log(dataJSON.name)
console.log(dataJSON.main.temp)
console.log(dataJSON.main.temp_min)
console.log(dataJSON.main.temp_max)
console.log(dataJSON.weather[0].icon)

//imagenes de climas
var sol = "https://cdn-icons-png.flaticon.com/128/2698/2698240.png"
var nubes = "https://cdn-icons-png.flaticon.com/128/704/704743.png"
var nubesSol = "https://cdn-icons-png.flaticon.com/128/1332/1332295.png"
var lluvia = "https://cdn-icons-png.flaticon.com/128/2060/2060872.png"
var nubesNormal="https://cdn-icons-png.flaticon.com/128/704/704845.png"

//accedemos a elementos html
var foto = document.getElementById("foto")
var tem = document.getElementById("tem")
var max = document.getElementById("max")
var temperatura = document.getElementById("temperatura")
var ancho = screen.width



//hacemos el responsive de acuerdo a los estilos aplicados desde javascript
if (ancho > 1000 && ancho < 2000){

    foto.style.top="-11vh"
    foto.style.width="22%"
    foto.style.height="18vh"
    tem.style.marginTop="-13vh"
}
if ( ancho > 500 && ancho < 1000 ){
    foto.style.top="-3vh"
    foto.style.width="28%"
    foto.style.height="16vh"
    tem.style.marginTop="-7vh"
    max.style.marginTop="-13vh"
}
if(ancho < 500 && ancho > 230){
    foto.style.top="3vh"
    foto.style.width="30%"
    foto.style.height="18vh"
    tem.style.marginTop="3vh"
    max.style.marginTop="-9vh"
    temperatura.style.marginTop="-7vh"
}
if(ancho < 400 && ancho > 230){
    foto.style.height="15vh"
    foto.style.width="42%"
    foto.style.top="10vh"
    tem.style.marginTop="11vh"
    max.style.marginTop="-6vh"
    temperatura.style.marginTop="-5.3vh"
}


//cambiamos los iconos por otros mas visuales
if(dataJSON.weather[0].icon === "01d"){
    foto.src=sol
}
else if( dataJSON.weather[0].icon === "04d"){
    foto.src=nubes
}
else if (dataJSON.weather[0].icon === "10d"){
    foto.src=lluvia
}
else if (dataJSON.weather[0].icon === "09d"){
    foto.src=lluvia
}
else if (dataJSON.weather[0].icon === "02d"){
    foto.src=nubesSol
}
else if (dataJSON.weather[0].icon === "03d"){
    foto.src=nubesNormal
}
}
}
}

function mas(){
    var mas = document.getElementById("clima")
    mas.innerHTML=""
}

//pasamos la primer letra de cada palabra de la ciudad a mayusculas
function may(){
var tex = document.getElementById("ciudad")
var texto = document.getElementById("ciudad").value 
var texArray= texto.split(" ")
for (i = 0; i< texArray.length; i++){
    texArray[i] = texArray[i][0].toUpperCase() + texArray[i].substr(1) 
}
var ag = texArray.join(" ")
tex.value = ag
}
