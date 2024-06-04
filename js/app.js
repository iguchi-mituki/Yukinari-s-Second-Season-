displayTime();
setInterval(displayTime, 1000);


function displayTime() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if(hour<10){
    hour = "0" + hour;
  }
  if(minute<10){
    minute = "0" + minute;
  }
  if(second<10){
    second = "0" + second;
  }

  var currentTime = `${hour}:${minute}:${second}`;
  document.querySelector('.clock').textContent = currentTime; 
}