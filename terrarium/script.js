/*The solution to draggable elements was inspired by w3schools solution on creating a [Draggable HTML Element](https://www.w3schools.com/howto/howto_js_draggable.asp).*/

for(i=1;i<15;i++){
	dragElement(document.getElementById('plant'+i))
}

/*"A closure is the combination of a function bundled together (enclosed) 
with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function’s scope 
from an inner function." Create a closure so that you can track the dragged element*/

function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;

	function pointerDrag(e) {
		e.preventDefault();
		console.log(e);
		// get the initial mouse cursor position for pos3 and pos4
		pos3 = e.clientX;
		pos4 = e.clientY;
		// when the mouse moves, start the drag
		document.onpointermove = elementDrag;
		// when the mouse is lifted, stop the drag
		document.onpointerup = stopElementDrag;
	}

	function elementDrag(e) {
		// calculate the new cursor position
		// pos1 = where the Xmouse WAS - where it IS
		pos1 = pos3 - e.clientX;
		// pos2 = where the Ymouse WAS - where it IS
		pos2 = pos4 - e.clientY;
		//reset pos3 to current location of Xmouse
		pos3 = e.clientX;
		//reset pos4 to current location of Ymouse
		pos4 = e.clientY;
		console.log(pos1, pos2, pos3, pos4);
		// set the element's new position:
		terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
		terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
	}

	function stopElementDrag() {
		// stop calculating when mouse is released
		document.onpointerup = null;
		document.onpointermove = null;
	}
}