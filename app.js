let color =['red','green','yellow','blue']
let elements = document.getElementsByClassName('box');
let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let changeColor = ()=> {
  for(let i =0; i < elements.length; i++){
	let rand = random(0,4);
	console.log(rand)
	elements[i].style.backgroundColor = color[rand]
}
}
setInterval(changeColor,600)


