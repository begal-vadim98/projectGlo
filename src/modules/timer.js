const timer = (deadline, daysId, hoursId, minutesId, secondsId) => {

    const timerDays = document.getElementById(daysId),
      timerHours = document.getElementById(hoursId),
      timerMinutesours = document.getElementById(minutesId),
      timerSeconds = document.getElementById(secondsId);
  
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };
    console.log(timerSeconds)

    const getTimerRemaining = () => {
      let dateStop = new Date(deadline).getTime();
      let dateNow = new Date().getTime();
      let timerRemaining = (dateStop - dateNow) / 1000;
  
      let days = Math.floor(timerRemaining / 60 / 60 / 24),
        hours = Math.floor((timerRemaining / 60 / 60) % 24),
        minutes = Math.floor((timerRemaining / 60) % 60),
        seconds = Math.floor(timerRemaining % 60);
  
      return {
        timerRemaining,
        days,
        hours,
        minutes,
        seconds
      }
  
    }
  
    const updateClock = () => {
  
      const timerAction = document.querySelector('.timer-action');
  
      let getTime = getTimerRemaining();
  
  
        timerDays.textContent = addZero(getTime.days);
        timerHours.textContent = addZero(getTime.hours);
        timerMinutesours.textContent = addZero(getTime.minutes);
        timerSeconds.textContent = addZero(getTime.seconds);
      
        if (getTime.timerRemaining <= 0) {
          timerDays.textContent = "00";
          timerHours.textContent = "00";
          timerMinutesours.textContent = "00";
          timerSeconds.textContent = "00";
          timerAction.textContent = "Акция закончилась";
  
          clearInterval(idIntervalTimer);
      }
       
    }
    
    updateClock();
    let idIntervalTimer = setInterval(updateClock, 1000)
  }
  
  export default timer