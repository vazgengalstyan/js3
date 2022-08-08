let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },
    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

function createTreeDom(obj) {
    let ul = document.createElement('ul');

    for (let key in obj) {
        let li = document.createElement('li');
        li.style.color = 'red';
        li.innerHTML = key;

        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
            li.append(childrenUl);
        }

        ul.append(li);
    }

    return ul;
}

document.body.append(createTreeDom(data));




let ar = [{ element: 'p', content: 'test text', id: 1 },
    { element: 'div', class: 'block', id: 2 },
    { element: 'input', value: 'test' }
];

let func = (arr) => {
    for (let item in arr) {


        console.log(arr[item].element)
        if (arr[item].element === 'p') {
            let p = document.createElement('p');
            p.setAttribute('content', 'test text');
            p.setAttribute('id', '1');
            document.body.append(p);

        } else if (arr[item].element === 'div') {
            let div = document.createElement('div');
            div.setAttribute('class', 'block');
            div.setAttribute('id', '2');
            document.body.append(div);
        } else if (arr[item].element === 'input') {
            let inp = document.createElement('input');
            inp.setAttribute('value', 'test');
            document.body.append(inp);

        }
    }

}


func(ar);