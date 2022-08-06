//js-ում ստանալ հղումները և ամեն երկրորդի գույնը դարձել կարմիր

let link = document.getElementsByClassName('url')
let func = (link)=>{
	for(let i = 0; i < link.length; i++){
		if( i % 2  !== 0){
			link[i].style.color = 'red'
		}
	}
}
func(link)

//

