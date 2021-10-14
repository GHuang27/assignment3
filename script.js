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
    alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
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
