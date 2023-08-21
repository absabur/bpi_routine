import React, { useState, useEffect } from 'react';

function Time() {
  const [time, setTime] = useState('Loading...');
  const [day, setDay] = useState('Loading...');


  
  useEffect(() => {
    const interval = setInterval(() => {
  

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amPm = "";
        let bar = date.getDate();
        
    
        if(hours>=12){
            amPm = " PM";
        }else{
            amPm = " AM";
        }

        const formate = (val) =>{
            if(val < 10){
                val = "0"+ val;
            }
            return val;
        }
        const formatHour = (val) =>{
            if(val>12){
                let extra = val - 12;
                val = extra;
            }else if(val === 0){
                val = 12;
            }
            return val;
        }

        hours = formatHour(hours);
        hours = formate(hours);
        minutes = formate(minutes);
        seconds = formate(seconds);
        bar = formate(bar);
    
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day = weekday[date.getDay()];
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let monthName = months[date.getMonth()];
    
        setDay(bar + " " + monthName + ", " +day+ "");
        setTime(hours + ":" + minutes + ":" + seconds + amPm);
    
    


    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='time-sec'>
        <p style={{marginBottom:"0.2rem"}}>Time: {time}</p>
        <p>Date: {day}</p>
    </div>
  );
}
export default Time