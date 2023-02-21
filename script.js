function edit(){
let sum = 0;
  let prices = document.querySelectorAll("#price");
  for (let i = 0; i < prices.length; i++) {
    sum += parseInt(prices[i].textContent);
  }
  document.querySelector("#ans").innerHTML=sum

// var table = document.getElementById("table"),rIndex;
}

for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
        let rIndex = this.rowIndex;
        console.log(rIndex);
        
        document.getElementById("cell0").value = this.cells[0].innerHTML;
        document.getElementById("cell1").value = this.cells[1].innerHTML;
        document.getElementById("cell2").value = this.cells[2].innerHTML;
    };
}

function editRow()
{
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("cell0").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("cell1").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("cell2").value;
}
