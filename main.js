let email = document.querySelector('#username');
let pass = document.querySelector('#password');
let but = document.querySelector('#but2');
let pp = document.querySelector('#p2');
let divo = document.querySelector('#div1');
let div2 = document.querySelector('#div5');
let but1 = document.querySelector('#but');

function store() {
    localStorage.setItem('email', email.value)
    localStorage.setItem('pass', pass.value)
}


but.onclick = function() {
    store();
    let em = localStorage.getItem('email');
    let pas = localStorage.getItem('pass');
    pp.innerHTML = `${em}     ${pas}`;
    divo.style.display = 'block';
    div2.style.display = 'none';
}

let local = () => {
    if (localStorage.length !== 0) {
        let em = localStorage.getItem('email');
        let pas = localStorage.getItem('pass');
        pp.innerHTML = `${em}     ${pas}`;

        divo.style.display = 'block';
        div2.style.display = 'none';


    }
}
but1.onclick = function() {
    window.localStorage.clear();

    divo.style.display = 'none';
    div2.style.display = 'block';


}
local();