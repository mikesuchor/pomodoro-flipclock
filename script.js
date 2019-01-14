let sessionTimer = 25;
let breakTimer = 5;
let timerType = "session";
let count;
const flipClock = $(".flip_clock").FlipClock(0, {
  clockFace: 'MinuteCounter',
  autoStart: false,
  countdown: true,
  
}) 

const toggleTimer = (timer) => {
  return (timer == "session") ? timerType = "break" : timerType = "session";
}

const setCorrectTimer = (timer) => {
  return (timer == "session") ? flipClock.setTime(breakTimer * 60) : flipClock.setTime(sessionTimer * 60);
}

$(".session").html(sessionTimer);
$(".break").html(breakTimer);

$(".session_increment").on("click", () => {
  if ($(".session").html() > 0){
    sessionTimer = parseInt($(".session").html());
    sessionTimer += 1;
    $(".session").html(sessionTimer);
  }
});

$(".session_decrement").on("click", () => {
  if ($(".session").html() > 1){
    sessionTimer = parseInt($(".session").html());
    sessionTimer -= 1;
    $(".session").html(sessionTimer);
  }
});

$(".break_increment").on("click", () => {
  if ($(".break").html() > 0){
    breakTimer = $(".break").html();
    breakTimer += 1;
    $(".break").html(breakTimer);
  }    
});

$(".break_decrement").on("click", () => {
  if ($(".break").html() > 1){
    breakTimer = $(".break").html();
    breakTimer -= 1;
    $(".break").html(breakTimer);
  }
});  

$(".start").on("click", () => {
  if (count != sessionTimer || flipClock.getTime() == 0){
    flipClock.setTime(sessionTimer * 60);
  }
  count = sessionTimer;    
  flipClock.start();    
});

$(".stop").on("click", () => { flipClock.stop() });

$(".reset").on("click", () => {
  flipClock.stop();
  flipClock.setTime(0);
  timerType = "session";
});