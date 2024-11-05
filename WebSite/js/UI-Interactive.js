async function notify(msg, timeout){
  const contentArea = document.getElementById('content');
  const notifier = document.createElement('div');
  notifier.className = 'notification';
  notifier.textContent = msg;

  contentArea.appendChild(notifier);

  await new Promise(resolve => setTimeout(resolve, timeout*1000));

  contentArea.removeChild(notifier);
}
