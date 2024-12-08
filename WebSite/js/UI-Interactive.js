async function notify(msg, timeout){
  const contentArea = document.getElementById('content');
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
