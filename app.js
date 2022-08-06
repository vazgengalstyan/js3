/*js-ում ստանալ հղումները և ամեն երկրորդի գույնը դարձել կարմիր:*/

let link = document.getElementsByClassName('url')
let func = (link)=>{
	for(let i = 0; i < link.length; i++){
		if( i % 2  !== 0){
			link[i].style.color = 'red'
		}
	}
}
func(link)


/*հղումներից ստանալ href-ները և լցնել մասիվի մեջ։  (մասիվը տպել):*/

let getHref =(url)=>{
	let arr =[];
	for(let i = 0; i < url.length; i++){
		arr.push(url[i].getAttribute('href'))
	}
	console.log(arr)
}
getHref(url)


/*ջնջել href attribute-ը ամեն երկրորդ հղումից։*/

let deleteHrefAttribute = (url) => {
        for (let i = 0; i < url.length; i++) {
                if (i % 2 !== 0) {
                        url[i].removeAttribute('href')
                }
                console.log(url[i]);
        }

}

deleteHrefAttribute(url);

