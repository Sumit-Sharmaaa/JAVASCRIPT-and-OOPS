function changeColor(selector) {
  //Implement your function here
  const a = document.querySelector(selector);
    a.style.backgroundColor='yellow';
    a.style.color = 'black';
}

changeColor(".my-class");
changeColor("#my-id");
changeColor("button");




