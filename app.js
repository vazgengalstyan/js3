/*1. mknik@ sharjeluc element@ het@ petq e sharjvi.*/

let element = document.getElementById('box')

/* document.addEventListener('mousemove',function (e) {
	element.style.top = e.clientY + 'px';
	element.style.left = e.clientX + 'px';

 })*/
 
 /*2. mknik@ elementi vra bereluc petq e element@ haytnvi ekrani patahakan dirqum*/
 
/*let mousemoveFunc = () => {
    element.style.top =(Math.round(Math.random() * (window.innerHeight - element.offsetHeight))) + 'px';
    element.style.left = (Math.round(Math.random() * (window.innerWidth - element.offsetWidth))) + 'px';
 }

 element.addEventListener('mouseover',mousemoveFunc );*/
 
  /*3.elementi vra sexmeluc petq e element@ stana random guyn*/
 
/*element.onclick = function(click) {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = '#' + color;
}*/

/*4. mknikov bdi krananq element@ brnenq u texasharjenq*/


 /*5. ekrani cankacac tex click eneluc element@ bdi haytnvi @dtex*/
 document.onclick = function(e) {
    element.style.top = e.clientY + 'px';
    element.style.left = e.clientX + 'px';
}

/*6. stexcel html-um forma (anun, axganun, email, tariq, ser, hasce) nshvac dashterov yev submit sexmeluc tpeq formai arjeqner@ console-um obyekti tesqov*/