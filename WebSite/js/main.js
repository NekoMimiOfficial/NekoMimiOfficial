window.addEventListener('load', function (){
  main();
});

function DBGline() {
  var elements = document.querySelectorAll('*');
  console.log(elements);
  for (var i=0; i < elements.length; i++) 
  {
    elements[i].style.outline = "solid red 1px";
  }
}
