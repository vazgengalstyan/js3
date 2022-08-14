let divo = document.querySelector('#divo');


// 2

/*
divo.onmousemove = function(event) {

    divo.style.top = Math.random() * (window.innerHeight - divo.clientHeight) + "px";
    divo.style.left = Math.random() * (window.innerWidth - divo.clientWidth) + "px";
};
*/

//3
/*divo.onclick = function(click) {
    let col = Math.floor(Math.random() * 16777215).toString(16);
    divo.style.backgroundColor = '#' + col;

}
*/


//5

/*document.onclick = function(event) {
    divo.style.top = event.clientY + 'px';
    divo.style.left = event.clientX + 'px';
}
*/


//1
/*document.onmousemove = function(event) {

    divo.style.top = event.clientY + 'px';
    divo.style.left = event.clientX + 'px';
};
*/


//6
let sub = document.querySelector('#submit');

let anun = document.getElementById('name');
let lastnem = document.getElementById('lastnem');
let male = document.getElementById('male');
let female = document.getElementById('female');
let date = document.getElementById('date');
let address = document.getElementById('address');
let email = document.getElementById('email');

let func = () => {
    let user = {};
    if (male.value === true) {
        user.male = male.value;
    } else {
        user.female = female.value;
    }
    user.name = anun.value;
    user.lastnem = lastnem.value;


    user.date = date.value;
    user.address = address.value;
    user.email = email.value;
    console.log(user)
}

sub.addEventListener('click', func);