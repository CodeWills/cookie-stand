'use strict';

var storeLoc = [];

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, maxCust, minCust, avgCookies) {
  this.name = name;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgCookies = avgCookies;
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  storeLoc.push(this);
  this.getHourlyCookies();
}

Store.prototype.getCustPerHour = function() {
  return getRandomNum(this.minCust, this.maxCust);
};

Store.prototype.getHourlyCookies = function() {
  for(var i = 0; i < hours.length; i++) {
    this.hourlyCookies.push(Math.floor(this.getCustPerHour() * this.avgCookies));
    this.dailyTotal += this.hourlyCookies[i];
  }

  return this.hourlyCookies;
};

function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function createTable() {
  var tableEl = document.getElementById('table1');
  tableEl.appendChild(createTableHead());
  tableEl.appendChild(createTableBody());
}

function createTableHead() {
  var theadEl = document.createElement('thead');
  var headRow = createTableRow('', hours, 'Totals');
  theadEl.appendChild(headRow);
  return theadEl;
}

function createTableBody() {
  var tbodyEl = document.createElement('tbody');
  for(var j = 0; j < storeLoc.length; j++) {
    var bodyRow = createTableRow(storeLoc[j].name, storeLoc[j].hourlyCookies, storeLoc[j].dailyTotal);
    tbodyEl.appendChild(bodyRow);
  }

  return tbodyEl;
}

function createTableRow(vertHeader, dataPoints, vertFooter) {
  var trEl = document.createElement('tr');
  var tdElOne = document.createElement('td');
  tdElOne.textContent = vertHeader;
  trEl.appendChild(tdElOne);

  for(var x = 0; x < dataPoints.length; x++) {
    var tdElTwo = document.createElement('td');
    tdElTwo.textContent = dataPoints[x];
    trEl.appendChild(tdElTwo);
  }

  var tdElThree = document.createElement('td');
  tdElThree.textContent = vertFooter;
  trEl.appendChild(tdElThree);
  return trEl;
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

createTable();

var formEl = document.getElementById('form1');
function onSubmit(event) {
event.preventDefault();
var formStuff = {
  fName: event.target.fName.value
  fMin: parseInt(event.target.fMin.value)
  fMax: parseInt(event.target.fMax.value)
  fAvg: parseInt(event.target.fAvg.value)
};
new Store()
}
