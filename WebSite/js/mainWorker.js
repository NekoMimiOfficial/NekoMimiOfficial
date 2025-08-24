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
  if (hour == 0) {hour= 12;}
  var minutes= d.getMinutes();
  if (minutes < 10) {offset= "0";}
  clock.innerHTML= hour + ":" + offset + minutes;
  if (minutes == 39) {clock.innerHTML= "Miku time!";}
  if (hour == 11 && minutes == 11) {clock.innerHTML= "It's all ones!";}
  if (hour == 12 && minutes == 34) {clock.innerHTML= "The clock is counting upwards";}
  if (d.getHours() >= 1 && d.getHours() < 5) {clock.innerHTML= "Your eyes feel heavy, you're eepy :3";}
  //reminder to add SAO clear date
}