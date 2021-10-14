let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    let table = document.querySelector('table');
	let newRow = document.createElement('tr');
	let newCol;
	numRows++;
	if(numCols == 0) {
		numCols = 1;
	};
	for(let i = 0; i < numCols; i++) {
		newCol = document.createElement('td');
		newRow.appendChild(newCol);
	};
	table.appendChild(newRow);
}

//Add a column
function addC() {
	if(numRows == 0) {
		addR();
	};
	let table = document.querySelector('table');
	let newCol;
	let cRow = table.firstElementChild;
	cRow.appendChild(document.createElement('td'));
	for(let i = 1; i < numRows; i++) {
		cRow = cRow.nextSibling;
		cRow.appendChild(document.createElement('td'));
	};
	numCols++;
}

//Remove a row
function removeR() {
    let table = document.querySelector('table');
	table.lastElementChild.remove();
	numRows--;
}
//Remove a column
function removeC() {
	let table = document.querySelector('table');
	let cRow = table.firstElementChild;
	cRow.lastElementChild.remove();
	for(let i = 1; i < numRows; i++) {
		cRow = cRow.nextSibling;
		cRow.lastElementChild.remove();
	}
	numCols--;
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
