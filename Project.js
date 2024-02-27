var today = new Date();
var countdownDuration = new Date().getTime() + (10*24*60*60*1000);

var x =  setInterval(function() {
    
    var now = new Date().getTime();   
  
    var difference = countdownDuration - now;
  
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById('timer').innerHTML = days + "d " +  hours + "h " +  minutes + "m " + seconds + "s";
  }, 1000);
  
  