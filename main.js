let inp1 = document.getElementById('input1');
let inp2 = document.getElementById('input2');
let inp3 = document.getElementById('input3');
let divo = document.getElementById('divik');
let but = document.getElementById('but');
let func = () => {
    let in1 = Number(inp1.value);
    let in2 = inp2.value;
    let in3 = Number(inp3.value);

    if (in2 === '+') {
        let sum = in1 + in3;
        divo.style.display = 'block';
        divo.append(sum);

    } else if (in2 === '-') {
        let sum = in1 - in3;
        divo.style.display = 'block';
        divo.append(sum);
    } else if (in2 === '*') {
        let sum = in1 * in3;
        divo.style.display = 'block';
        divo.append(sum);

    } else if (in2 === '/') {
        let sum = in1 / in3;
        divo.style.display = 'block';
        divo.append(sum);
    } else if (inp2 !== '/' && '*' && '-' && '+') {
        let sum = 'enter number';
        divo.style.display = 'block';
        divo.append(sum);

    };

}