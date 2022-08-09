/*Հետեւյալ օբյեկտից նկարել ծառ html-ում, և ծառի ամեն ճյուղը ներկել կարմիր*/
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
 function createTree(obj) {
     
      let ul = document.createElement('ul');

      for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let childrenUl = createTree(obj[key]);
        if (childrenUl) {
          li.append(childrenUl);
		  childrenUl.style.color = 'red'
        }

        ul.append(li);
      }

      return ul;
    }
  let treeFunc = (wood, data)=> {
    container.append(createTree(data));
  }	
  let container = document.getElementById('container');
    treeFunc(container,data);  


/*[{element: 'p', content: 'test text', id: 1}, {element: 'div', class: 'block', id: 2}, {element: 'input', value: 'test'}] Գրել ֆունկցիա որը նման մասիվից html-ում կավելացնի էլեմենտներ։*/





