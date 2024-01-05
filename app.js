// API -> Application Programming Interface (tusgailan ashiglahad hadgalsan data
// fetch() -> huselt yvuulah  
// promise -> mnii ywuulsan huselted hariu ireh amlalt
// .then() -> promise
// response -> status : 200 /approved/, 404, 300, 500 /error/
// json() file -> zambaragui data g nudend evteihen haragduulna
// fetch('https://fakestoreapi.com/users').then(
//     response => response.json()
// ).then(
//     user => {
//         console.log(user);
//         let too = [2, 25, 3];
//         console.log(user[user.length-1].phone);
//     }
// );
// fetch('http://127.0.0.1:5500/lab%2013/book.html').then(
//     response => response.json()
// ).then(
//     data => {
//         console.log(data);
//         console.log(data.book[0].author);
//     }
// )
// {} -> . eer handana
// [] -> [] handana

const input = document.getElementsByTagName('input')[0];
const searchBtn = document.querySelector('.srch');
const name = document.querySelector('.name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const wind = document.querySelector('.wind');
const img = document.getElementsByTagName('img')[0];
searchBtn.addEventListener('click', ()=>{
    let city = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
    response => response.json()
    ).then(
        tsg => {
            console.log(tsg);
            if(tsg.cod === '404'){
                name.innerText = "Not found";
                img.src="404.webp";
            }
            temp.innerText = tsg.main.temp + "C";
            desc.innerText = tsg.weather[0].description;
            wind.innerText = tsg.wind.speed + "km/h";
            let status = tsg.weather[0].main;
            switch(status){
                case "Clouds" :
                    img.src= "cloud.webp";
                    break;
                case "Clear" :
                    img.src = "clear.webp";
                    break;
                case "Mist" :
                    img.src = "mist.webp";
                    break;
                case "Rain" :
                    img.src = "rain.webp";
                    break;
                case "Snow" :
                    img.src = "snow.webp";
                    break;
                default : 
                    img.src="";
                    break;
            }
        }
    );
});



