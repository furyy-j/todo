import "../css/style.scss";

//check task
let list = document.querySelector('ul');

list.addEventListener('click',function(ev) {
	if(ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
		toLocal();
	}
},false);

//localStorage
let toDo;

window.toLocal = function toLocal(){
	toDo = list.innerHTML;
	localStorage.setItem('toDos',toDo)
}
if(localStorage.getItem('toDos')){
	list.innerHTML = localStorage.getItem('toDos');
}

window.clearLS = function clearLS(){
	localStorage.clear();
}

//create new task
window.newElement = function newElement(){

	let li = document.createElement('li');
	let inputValue = document.getElementById('myInput').value;
	let t = document.createTextNode(inputValue);
	li.appendChild(t);

	if(inputValue == ''){
		let myNodeList = document.getElementsByTagName('LI');

		let count = myNodeList.length ;
		t = document.createTextNode(`Task ${++count}`);
		li.appendChild(t);
		document.getElementById('myUL').appendChild(li);
		toLocal();
	}else{

		document.getElementById('myUL').appendChild(li);
		toLocal();
	}
	document.getElementById('myInput').value = '';

	let span = document.createElement('SPAN');
	let icoTxt = document.createTextNode('\u00D7');

	span.className = 'close';
	span.appendChild(icoTxt);
	li.appendChild(span);

	for(let i=0;i<close.length;i++){
	close[i].onclick = function(){
		let div = this.parentElement;
		div.style.display = 'none';
		toLocal();
	}
	}
}

//close ico
let myNodeList = document.getElementsByTagName('LI');
let countNode = myNodeList.length;

for(let i=0;i<countNode;i++){

	let span = document.createElement('SPAN');
	let icoTxt = document.createTextNode('\u00D7');

	span.className = 'close';
	span.appendChild(icoTxt);
	myNodeList[i].appendChild(span);

}

//delete task
let close = document.getElementsByClassName('close');

for(let i=0;i<close.length;i++){
	close[i].onclick = function(){
		let div = this.parentElement;
		console.log(div)
		div.style.display = 'none';
		toLocal()
	}
}

//подсказка 
let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;


      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;


      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0;

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { 
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };

























































