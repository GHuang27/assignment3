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

//ADJUST THE 0 ROWS CASE
//Add a column
function addC() {
	let table = document.querySelector('table');
	let newCol;
	if(numRows == 0) {
		let newRow = document.createElement('tr');
		table.appendChild(newRow);
		numRows++;
	};
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
	if(numRows == 0) {
		return;
	};
    let table = document.querySelector('table');
	table.lastElementChild.remove();
	numRows--;
	if(numRows == 0) {
		numCols = 0;
	};
}

//Remove a column
function removeC() {
	if(numCols == 0) {
		return;
	};
	if(numRows == 0) {
		numCols--;
		return;
	};
	let table = document.querySelector('table');
	let cRow = table.firstElementChild;
	cRow.lastElementChild.remove();
	for(let i = 1; i < numRows; i++) {
		cRow = cRow.nextSibling;
		cRow.lastElementChild.remove();
	};
	numCols--;
	if(numCols == 0) {
		numRows = 0;
	};
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
