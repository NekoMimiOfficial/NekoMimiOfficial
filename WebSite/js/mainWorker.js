async function main() {
  const track= document.getElementById("track")
  const clock= document.getElementById("clock")
  setGlobalVariable('--Scale', await getWidthScale())
  track.classList.add("track-anim")
  let clockWorkerID= setInterval(dating, 1000);

  console.log("async-ly nekofied :3")
}

function dating() {
  var d= new Date();
  var offset= "";
  var hour= d.getHours();
  if (hour > 12) {hour= hour - 12;}
  var minutes= d.getMinutes();
  if (minutes < 10) {offset= "0";}
  clock.innerHTML= hour + ":" + offset + minutes;
}