const addPetIn = document.getElementById("addPetB");
const removePetIn = document.getElementById("removePetB");
const pharmacyB = document.getElementById("pharmacyB");
const homeB = document.getElementById("homeB");

const myText = document.getElementById("my-text");
myText.style.cssText = `height: ${myText.scrollHeight}px; overflow-y: hidden`;
myText.addEventListener("input",function(){
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
})

function addTableRow(){
    const table = document.getElementById("shotHistoryTable");
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.innerHTML ='<input type="text" class = "infoIn"">';
    cell2.innerHTML = '<input type = "text" class ="dateIn">';

}
function deleteTableRow(button) {
   
    const row = button.parentNode.parentNode;

    row.parentNode.removeChild(row);
}
