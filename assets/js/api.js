function clima(){
    fetch("https://api.open-meteo.com/v1/forecast?latitude=-16.07&longitude=-57.68&hourly=temperature_2m&daily=weathercode&current_weather=true&timezone=America%2FSao_Paulo")
    .then(response_ =>{
        return response_.json()
    })
    .then( clima => {
        const daily_ = clima.daily;
        const data_ = clima.current_weather;
        const current_time =  data_.temperature;
        const daily_time = daily_.time

        var bg = document.getElementById('clima-bg');
        
        if(current_time > 30){
            bg.src = "assets/images/undraw_beach_rvmg.svg"
        }else{
            bg.src = "assets/images/undraw_modern_woman_re_d8bx.svg"
        }
        
        const dia = document.getElementById('next-day');
        const temp = document.getElementById('currenty');
        
        for( var i = 0; i < 3; i++){
            dia.innerText = daily_time[i];
        } 
        
        temp.innerText = current_time + ' °C';


    }).catch(error => {
        console.error('Error:', error);
    });
}


document.onload = clima()