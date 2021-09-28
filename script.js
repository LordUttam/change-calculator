let billAmountEntry = document.getElementById("bill");
let cashReceivedEntry = document.getElementById("cash");
let next = document.getElementById("next");
let nextstep = document.getElementById("next-step");
let enter = document.getElementById("enter");
let table = document.querySelector("table");
let message = document.getElementById("message");

function displayNextstep() {
  message.innerText = "";
  let billAmount = parseInt(billAmountEntry.value);
  if (billAmount < 1) {
    message.innerText = "Please retry with valid bill amount.";
  } else {
    nextstep.style.display = "block";
  }
}

function getChange() {
  let billAmount = parseInt(billAmountEntry.value);
  let cashReceived = parseInt(cashReceivedEntry.value);

  if (billAmount > cashReceived) {
    table.style.display = "";
    message.innerText =
      "Cash is less than bill. Please enter the correct amounts.";
  } else if (billAmount === cashReceived) {
    table.style.display = "";
    message.innerText = "No amount needs to be returned.";
  } else {
    message.innerText = "";
    table.style.display = "table";
    let amountleft = cashReceived - billAmount;
    let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

    for (note of notes) {
      document.getElementById(note).innerHTML = "";
    }

    for (note of notes) {
      if (amountleft >= note) {
        amountleft = getNotes(amountleft, note);
      }
    }
  }
}

function getNotes(amountleft, note) {
  document.getElementById(note).innerHTML = Math.floor(amountleft / note);
  console.log("hi");
  return amountleft % note;
}

function enterClickHandler() {
  if (billAmountEntry.value != "" && cashReceivedEntry.value != "") {
    if (billAmountEntry.value > 0 && cashReceivedEntry.value > 0) {
      getChange();
    } else {
      table.style.display = "";
      message.innerText =
        "Bill amount and cash received can not be zero or negative. Try again.";
    }
  } else {
    table.style.display = "";
    message.innerText =
      "Bill amount and cash received can not be blank. Try again.";
  }
}

function nextClickHandler() {
  if (billAmountEntry.value != "") {
    if (billAmountEntry.value > 0) {
      displayNextstep();
    } else {
      table.style.display = "";
      message.innerText = "Bill amount can not be zero or negative. Try again.";
    }
  } else {
    table.style.display = "";
    message.innerText = "Bill amount can not be blank. Try again.";
  }
}

enter.addEventListener("click", enterClickHandler);
next.addEventListener("click", nextClickHandler);
