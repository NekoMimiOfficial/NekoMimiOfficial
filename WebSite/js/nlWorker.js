document.addEventListener('copy', function(event) {
  event.preventDefault();
});

document.addEventListener('cut', function(event) {
  event.preventDefault();
});

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

var counter= getCookie("count");
if (!counter) {counter= 0;}else{counter= parseInt(counter);}

async function main() {
  document.getElementById("counter").innerText= counter;
  console.log("async-ly nekofied :3")
}

function count()
{
    counter+= 1;
    document.getElementById("counter").innerText= counter;
    setCookie("count", counter);
}