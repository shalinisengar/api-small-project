let inp=document.querySelector('input')
let btn=document.querySelector('button')
let list = document.getElementById('list')
 btn.addEventListener('click',function(){
    let searchtext = inp.value;
    let data=fetchdata(searchtext);
    inp.value='';
 })
 function fetchdata(searchtext){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchtext}`)
    .then(function(response){
        console.log(response);
        manipulationdom(response.data);
    })

 }
 function manipulationdom(datas){
    for(let data of datas){
        let figure = document.createElement('figure');
        if(data.show.image){
            figure.innerHTML=`
            <style>
            display: flex;  
            </style>
            <img  height="300px" width="300px" src=${data.show.image.original} alt='photo'/>
            <h2> Genre: ${data.show.genres[0]}</h2>
            <p>${data.show.summary }</p>
            `
            list.appendChild(figure)
        }
    }
 }