async function notify(msg, timeout){
  const contentArea = document.getElementById("greeter");
  const notifier = document.createElement('div');
  notifier.className = 'notification';
  notifier.textContent = msg;

  contentArea.appendChild(notifier);

  await new Promise(resolve => setTimeout(resolve, timeout*1000));

  contentArea.removeChild(notifier);
}

async function injectCSS(css){
  let charMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8',
    '9', 'a', 'b', 'c', 'd', 'e', 'f', 'X', 'Y', 'Z']

  function getRanLet() {
    return charMap[(Math.floor(Math.random() * charMap.length))]
  }

  var ranID = ""
  for (i=0; i<7; i++){
    ranID = ranID + getRanLet()
  }

  if (!document.getElementById(ranID))
  {
      var head  = document.getElementsByTagName('head')[0];
      var link  = document.createElement('link');
      link.id   = ranID;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = css;
      link.media = 'all';
      head.appendChild(link);
  }else{
    notify('[!]Error linking CSS: ['+css+']\nDebug: [ID: '+ranID+' already exists, css file possibly already loaded]', 8);
  }
}

async function getContentWidth (element) {
  var styles = getComputedStyle(element)

  return element.clientWidth
}

async function setGlobalVariable(variable, value) {
  document.documentElement.style.setProperty(variable, value);
}

async function getWidthScale() {
  const scale= await getContentWidth(document.getElementById("greeter")) / 1920
  if (scale < 0.6) {return 0.6}
  return scale
}

function constDiv(classNameA) {
  const d= document.createElement("div");
  d.className= classNameA;
  return d;
}

async function linkStart() {
  const starter= document.getElementById("starter");
  const link_start= document.getElementById("link-start");
  const screen= document.getElementById("greeter");
  const tv= document.getElementById("tv");

  starter.style.animation= "phase1 300ms linear forwards";
  document.body.style.cursor= "wait";
  await new Promise(resolve => setTimeout(resolve, 0.6*1000));
  document.getElementById("lst").style.animation= "phase1 200ms linear forwards";
  await new Promise(resolve => setTimeout(resolve, 0.3*1000));
  document.getElementById("iscreen").removeChild(starter)
  link_start.style.animation= "phase2 400ms linear forwards";
  await new Promise(resolve => setTimeout(resolve, 0.4*1000));
  const prog= document.createElement("div");
  prog.className= "progress";
  link_start.appendChild(prog);
  await new Promise(resolve => setTimeout(resolve, 0.6*1000));
  prog.style.width= "200px";
  await new Promise(resolve => setTimeout(resolve, 0.4*1000));
  prog.style.width= "350px"
  notify('loading Cardinal v1.0 ...', 2)
  await new Promise(resolve => setTimeout(resolve, 0.8*1000));
  document.body.style.cursor= "default";
  screen.style.animation= "phase1 200ms linear forwards";
  await new Promise(resolve => setTimeout(resolve, 0.4*1000));
  document.body.removeChild(screen)
  tv.style.animation= "phase3 300ms linear forwards";
  await new Promise(resolve => setTimeout(resolve, 1.2*1000));
  tv.style.opacity= "0%";
  tv.className= "vancedTV";
  tv.style.animation= "showVanced 1200ms linear forwards";
  await new Promise(resolve => setTimeout(resolve, 1.6*1000));
  const underC= constDiv("stayTuned");
  tv.appendChild(underC);
  underC.innerHTML= "Hello, world.";
  underC.style.animation= "showUC 1s linear forwards";
  await new Promise(resolve => setTimeout(resolve, 1*1000));
  const light_pprobe= constDiv("pprobe");
  const light_pprobe_s= constDiv("pprobe_s");
  const light_pprobe_f= constDiv("pprobe_f");
  tv.appendChild(light_pprobe);
  tv.appendChild(light_pprobe_s);
  tv.appendChild(light_pprobe_f);
  await new Promise(resolve => setTimeout(resolve, 2*1000));
  underC.style.animation= "phase1 0.7s linear forwards";
  await new Promise(resolve => setTimeout(resolve, 1.6*1000));
  underC.innerHTML= "More comming soon.";
  underC.style.animation= "showUC 1s linear forwards";
}

async function navigate (n)
{
  const link= document.getElementById("link"+n);
  link.style.animation= "perdoleBidle .5s linear infinite";
}