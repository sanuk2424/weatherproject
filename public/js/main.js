const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById("city_name");
const temp_status =document.getElementById('temp_status');
const real_temp =document.getElementById('real_temp');

const datahide = document.querySelector('.middle_layer');
const today_date = document.getElementById('today_date');

const day = document.getElementById('day');
const getInfo = async (event) => {
    event.preventDefault();

    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = 'Plz write the name before search';
        datahide.classList.add('data_hide')
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=49ba2530b5b8acc64a82d892c6bb8393`;
            const response = await fetch(url);
            const data  = await response.json();
            console.log(data);
            const arrData = [data];
            city_name.innerText =`${arrData[0].name},${arrData[0].sys.country}`;
            real_temp.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            const tempMod = arrData[0].weather[0].main;
            if(tempMod ==="Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            } else if (tempMod==="Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            } else if (tempMod==="Rain") {
                temp_status.innerHTML = "<i class='fas fa-rain' style='color:#a4b0b3;'></i>"
            } else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            datahide.classList.remove('data_hide')
            

        } catch (err) {
            city_name.innerText = 'Plz enter the city name properly';
            datahide.classList.add('data_hide')

        }



    }

}
const d = new Date();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day_week = weekday[d.getDay()];

day.innerText = day_week;

const months = new Array(12);
months[0] = "Jan";
months[1] = "Feb";
months[2] = "Mar";
months[3] = "Apr";
months[4] = "May";
months[5] = "Jun";
months[6] = "Jul";

months[7] = "Aug";
months[8] = "Sep";
months[9] = "Oct";
months[10] = "Nov";
months[11] = "Dec";
let month = months[d.getMonth()];

today_date.innerText = d.getUTCDate()+", "+ month;
submitBtn.addEventListener('click', getInfo);