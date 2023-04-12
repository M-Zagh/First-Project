function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    var dateTimeValue = document.getElementById("myDateTime").value;
    var dateSpan = document.createElement("span");
    var dateTime = document.createTextNode(dateTimeValue);
    dateSpan.appendChild(dateTime);
    dateSpan.setAttribute("class", "date-time");
    li.appendChild(dateSpan);
    document.getElementById("myUL").appendChild(li);
  }

  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  // Add date and time span element
  var dateSpan = document.createElement("span");
  var date = new Date();
  var datetime = document.createTextNode(date.toLocaleString());
  dateSpan.appendChild(datetime);
  dateSpan.setAttribute("class", "date-time"); // Add class attribute
  li.appendChild(dateSpan);

  // Add close button
  var closeSpan = document.createElement("span");
  var close = document.createTextNode("\u00D7");
  closeSpan.className = "close";
  closeSpan.appendChild(close);
  li.appendChild(closeSpan);

  // Set onclick event listener for close button
  var closeButtons = document.getElementsByClassName("close");
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  // Clear input field
  document.getElementById("myInput").value = "";
  document.getElementById("myDateTime").value = "";
}

function saveList() {
  var list = document.getElementById("myUL").innerHTML;
  localStorage.setItem("myList", list);
}

function loadList() {
  var list = localStorage.getItem("myList");
  if (list) {
    document.getElementById("myUL").innerHTML = list;
  }
}

window.onload = loadList;
window.onbeforeunload = saveList;