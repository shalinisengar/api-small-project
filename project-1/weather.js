let apikey='5a8bf94e983d5f88859995b7cbfafb72'
let inp = document.querySelector('input')
let btn = document.querySelector('button')
let temp=document.querySelector('#temp')
let city=document.querySelector('#city')
btn.addEventListener('click',()=>{
    let text = inp.value

fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${text} &appid=${apikey}`).then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
    fn1(data);
})
})
function fn1(data){
city.innerHTML=data.name
temp.innerHTML=data.main.temp
}
