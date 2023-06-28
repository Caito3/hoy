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
    var a = document.getElementById("com")
    a.style.display = "block"
    setTimeout(function(){
        a.style.display = "none"
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
        var a = document.getElementById("pra")
        a.style.display = "block"
        setTimeout(function(){
            a.style.display = "none"
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
<img class="fotos" src="https://openweathermap.org/img/wn/${dataJSON.weather[0].icon}@2x.png">
<h2 class="tem">${temp}°C</h2>
<p class="max">Max: ${temp_max}°C</p>
<p class="temperatura">Min: ${temp_min}°C</p>
`




clima.appendChild(con)

console.log(dataJSON)
console.log(dataJSON.name)
console.log(dataJSON.main.temp)
console.log(dataJSON.main.temp_min)
console.log(dataJSON.main.temp_max)
console.log(dataJSON.weather[0].icon)
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
