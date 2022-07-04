addEventListener(`change`, (e) => {
  const select = e.target;
  const desc = select.selectedOptions[0].text;
  const p = "Please Select";
 if (!arr.includes(desc) && !arr.includes(p) ) {
    arr.push(desc);
  }
  });

var arr = [];

function Random(arr, num) {
  alert(arr);
  document.getElementById("Rezultatul").style.display = "block"; //insert text in div

  const shuffled = [...arr].sort(() => 0.5 - Math.random()); // random mix

  var x = shuffled.slice(0, num);
  document.getElementById("Rezultatul").innerHTML = x;
  makeTable(arr);
  return shuffled.slice(0, num);
}

function makeTable(array) {
  var table = document.createElement("table");
  var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

  for (var i = 0; i < array.length; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < array[i].length; j++) {
      var cell = document.createElement("td");
      cell.textContent = array[i][j];
      row.appendChild(cell);
    }

    var cell = document.createElement("td");
    cell.textContent = utc;
    row.appendChild(cell);
    table.appendChild(row);
  }
  document.getElementById(`tbody`).append(table);
}
