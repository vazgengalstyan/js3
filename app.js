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


let arr = [
	{element: 'p', content: 'test text', id: 1},
	{element: 'div', class: 'block', id: 2},
	{element: 'input', value: 'test'}
]

/*let getElements = (arr) => {
    for (let item of arr) {
        let element = document.createElement(item.element);
        if (item.content) {
            element.innerText = item.content;
        }
        for (let key in item) {
            if (key === 'element' || key === 'content') {
                continue;
            } else {
                element.setAttribute(key, item[key]);
            }
        }
        document.body.append(element);
    }
}

getElements(arr);*/

/*let x;
let addElements = (arr) =>{
      for(let i = 0; i <arr.length; i++){
           x = document.createElement(arr[i].element);
          x.innerHTML = arr[i].content?arr[i].content:null;
              x.value = arr[i].value?arr[i].value:null;
              if(arr[i].class){
                  x.classList.add(arr[i].class)
              }
          if(arr[i].id){
              x.id = arr[i].id
          }
          document.body.append(x);
          console.log(x)
      }
  }


  
addElements(arr)*/

let func1 = arr => {
        arr.forEach((item) => {

                let array = document.createElement(item.element)
                for (let key in item) {
                        array.setAttribute(key, item[key])

                }
                document.getElementById('divId').append(array)

        })
}
func1(arr)