
	 //1. Գրել promise որը 10 վարկյան անց կվերադարձնի JSON սթրինգ (պետք է պարունակի մարդկանց ցանկ որից
	// յուրաքանչյուրը պետք է ունենա անուն, ազգանուն և ծննդյան ամսաթիվ) և վերադարձված ինֆորմացիան պետք է
//	սորթավորել ըստ ծննդյան տարեթվի, և տպել։ Եթե promise-ը վերադարձնի error պետք է alert-ի միջոցով ցույց տալ error-ի message-ը։
/*

let user =[
		{name: 'John1',
		lastname: 'Smith1',
		birthday: new Date(('1964, 04, 15')),
		},
		{name: 'John2',
		lastname: 'Smith2',
		birthday: new Date(('1968, 10, 17')),
		},
		{name: 'John3',
		lastname: 'Smith3',
		birthday: new Date(('1908, 05, 14')),
		},
]
let func = (users, resolve,reject) => {
resolve(JSON.stringify(users.sort((a, b) => (a.birthday-b.birthday))))
}
let promise = new Promise(function(resolve, reject) {
	setTimeout(func, 1000, user,resolve,reject)
})
promise.then(res => {
	alert(res)
}).catch((error) => {
	alert(error)
}).finally(() => {
	alert('done');
})
	
	
//2.Գրել ֆունկցիա որը կվերադարձնի իրեն փոխանցված արգումենտներից միայն զույգ թվերով կազմված մասիվ։

		let array=function(){
		let arr=[];
			for(let i=0; i<=arguments.length; i++){
			if(arguments[i]%2===0){
				arr.push(arguments[i])
				}
			}
			return arr
		}
			console.log(array(100,20,54,60,80,81,75));
  
  
  */
  /*
(async function(){
let response = await fetch ('https://jsonplaceholder.typicode.com/posts?userId=1'), {
method:'GET'
});
let json = await response.json();
console.log(json, 'okokok')
})();
*/


/*







	(async function(){
		let baseURL= 'https://restcountries.com/v3.1/all';
	let response = await fetch (`${baseURL}`, {
	method: 'GET'                                                                                                                                                                                                                                                                                                            
	}).then (res => res.json());
	console.log(response.filter(item =>item.continents.includes('Asia')))
	})();
*/


let colors = ['red', 'green', 'yellow'];
let element = document.getElementById('div1');
let selectedColorIndex = 1;

let changeColor =()=> {
	if (selectedColorIndex < colors.length-1){
		selectedColorIndex ++
	}else{
		selectedColorIndex = 0;
	}
	console.log(element)
	element.style.backgroundColor = colors[selectedColorIndex];
}
setInterval(changeColor, 1000);


