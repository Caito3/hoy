function traer(){

var dat = document.getElementById("clima")
dat.innerHTML = ""
}

function hacer(ciudad, paises){
var clima = document.getElementById("clima")
var boton = document.getElementById("boton")
var ciudad = document.getElementById("ciudad").value
var paises = document.getElementById("paises").value

if(ciudad === "" || paises === ""){
    var a = document.getElementById("com")
    a.style.display = "block"
    setTimeout(function(){
        a.style.display = "none"
    },7000)
}
else{

const api = 'abb3c5e4202b40f9bd71a4c7b8c53e86'
const url =`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${paises}&appid=${api}`

fetch(url)
.then(data => {
    return data.json()
})

.then(dataJSON=>{
    if(dataJSON.cod == '404' ){
        var a = document.getElementById("pra")
        a.style.display = "block"
        setTimeout(function(){
            a.style.display = "none"
        },8000)
    }
        else{
            
        }
    hac(dataJSON)
})
function hac(dataJSON){
    var temp = dataJSON.main.temp
    temp = parseInt(temp -273.15)
    var temp_min = dataJSON.main.temp_min
    temp_min = parseInt(temp_min -273.15)
    var temp_max = dataJSON.main.temp_max
    temp_max = parseInt(temp_max -273.15)


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
