// let inp=document.querySelector('input')
// let btn=document.querySelector('button')
//  btn.addEventListener('click',function(){
//     let searchtext = inp.value;
//     let data=fetchdata(searchtext);
//     inp.value='';
//  })



//  function fetchdata(){
//     axios.get('https://goweather.herokuapp.com/weather/{bhopal}')
//     .then(function(response){
//         console.log(response.data);
//         // manipulationdom(response.data);
//     })

//  }

let cardsContainer = document.querySelector('.cards-container');

 fetch('https://dummyjson.com/products').then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
    manipulationdom(data.products);
})
.catch((err)=>{
    console.log(err);
})



 function manipulationdom(i){
    for(let datas of i){
       let div = document.createElement('div');
      let image = document.createElement('img');
      let li = document.createElement('h1');
      let title = document.createElement('h2');
      let brand = document.createElement('h3');
      let p= document.createElement('p');
      let p1= document.createElement('p');

      div.classList = 'card'
      image.classList = 'card-img'
           

      image.setAttribute('src',datas.images[0])
       li.innerText = `Id : ${datas.id}`
      console.log(datas.images[0],'rr');
      title.innerText =`Title :   ${datas.title}`
      brand.innerText =`Brand :   ${datas.brand}`
        p.innerHTML=`Description :   ${datas.description}`
        p1.innerHTML=`Category :   ${datas.category}`
        div

        
      div.appendChild(image)
      div.appendChild(li)
      div.appendChild(title)
      div.appendChild(brand)
      div.appendChild(p)
      div.appendChild(p1)

      cardsContainer.appendChild(div)
             
    }
 }

// fetch('https://goweather.herokuapp.com/weather/{bhopal}')