'use strict';

var hours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];
console.log('hours',hours);

var firstAndPike = {
  name:'1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: function () {
    console.log('break',firstAndPike);
    return Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function () {
    var arr = [];
    for (var i = 0; i < hours.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push (Math.round(this.custPerHour() * this.avgSale ));
    }
    var tSum = 0;
    for (var x = 0; x < hours.length; x++){
      tSum += arr[x];
    }
    arr.push(tSum);
    console.log(tSum);
    return arr;
  },
  pList: function() {
    var cookiesPerHour = this.cookiesPerHour();

    var pa = document.createElement('p');
    var lName = document.createTextNode(this.name);
    pa.appendChild(lName);
    var laStart = document.getElementById('start');
    laStart.insertBefore(pa,document.getElementById('1'));

    for (var i = 0; i < hours.length; i++){
      var ts = document.createElement('li');
      ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
      document.getElementById('1').appendChild(ts);
    }
    var totalCookies = document.createElement('li');
    totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
    document.getElementById('1').appendChild(totalCookies);
  }
};

var seaTac = {
  name:'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  custPerHour: function () {
    console.log('break',seaTac);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function () {
    var arr = [];
    for (var i = 0; i < hours.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push (Math.round(this.custPerHour() * this.avgSale));
    }
    var tSum = 0;
    for (var x = 0; x < hours.length; x++){
      tSum += arr[x];
    }
    arr.push(tSum);
    console.log(tSum);
    return arr;
  },
  pList: function() {
    var cookiesPerHour = this.cookiesPerHour();

    var pa = document.createElement('p');
    var lName = document.createTextNode(this.name);
    pa.appendChild(lName);
    var laStart = document.getElementById('start');
    laStart.insertBefore(pa,document.getElementById('2'));

    for (var i = 0; i < hours.length; i++){
      var ts = document.createElement('li');
      ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
      document.getElementById('2').appendChild(ts);
    }
    var totalCookies = document.createElement('li');
    totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
    document.getElementById('2').appendChild(totalCookies);
  }
};

var seattleCenter = {
  name:'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  custPerHour: function () {
    console.log('break',seattleCenter);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function () {
    var arr = [];
    for (var i = 0; i < hours.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push (Math.round(this.custPerHour() * this.avgSale));
    }
    var tSum = 0;
    for (var x = 0; x < hours.length; x++){
      tSum += arr[x];
    }
    arr.push(tSum);
    console.log(tSum);
    return arr;
  },
  pList: function() {
    var cookiesPerHour = this.cookiesPerHour();
    var pa = document.createElement('p');
    var lName = document.createTextNode(this.name);
    pa.appendChild(lName);
    var laStart = document.getElementById('start');
    laStart.insertBefore(pa,document.getElementById('3'));
    for (var i = 0; i < hours.length; i++){
      var ts = document.createElement('li');
      ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
      document.getElementById('3').appendChild(ts);
    }
    var totalCookies = document.createElement('li');
    totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
    document.getElementById('3').appendChild(totalCookies);
  }
};

var capHill = {
  name:'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  custPerHour: function () {
    console.log('break',capHill);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function () {
    var arr = [];
    for (var i = 0; i < hours.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push (Math.round(this.custPerHour() * this.avgSale));
    }
    var tSum = 0;
    for (var x = 0; x < hours.length; x++){
      tSum += arr[x];
    }
    arr.push(tSum);
    console.log(tSum);
    return arr;
  },
  pList: function() {
    var cookiesPerHour = this.cookiesPerHour();
    var pa = document.createElement('p');
    var lName = document.createTextNode(this.name);
    pa.appendChild(lName);
    var laStart = document.getElementById('start');
    laStart.insertBefore(pa,document.getElementById('4'));
    for (var i = 0; i < hours.length; i++){
      var ts = document.createElement('li');
      ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
      document.getElementById('4').appendChild(ts);
    }
    var totalCookies = document.createElement('li');
    totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
    document.getElementById('4').appendChild(totalCookies);
  }
};

var alki = {
  name:'Alki',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  custPerHour: function () {
    console.log('break',alki);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function () {
    var arr = [];
    for (var i = 0; i < hours.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push (Math.round(this.custPerHour() * this.avgSale));
    }
    var tSum = 0;
    for (var x = 0; x < hours.length; x++){
      tSum += arr[x];
    }
    arr.push(tSum);
    console.log(tSum);
    return arr;
  },
  pList: function() {
    var cookiesPerHour = this.cookiesPerHour();
    var pa = document.createElement('p');
    var lName = document.createTextNode(this.name);
    pa.appendChild(lName);
    var laStart = document.getElementById('start');
    laStart.insertBefore(pa,document.getElementById('5'));
    for (var i = 0; i < hours.length; i++){
      var ts = document.createElement('li');
      ts.appendChild(document.createTextNode(hours[i] + ': ' + cookiesPerHour[i] + ' cookies.' ));
      document.getElementById('5').appendChild(ts);
    }
    var totalCookies = document.createElement('li');
    totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies.'));
    document.getElementById('5').appendChild(totalCookies);
  }
};


firstAndPike.pList();
seaTac.pList();
seattleCenter.pList();
capHill.pList();
alki.pList();
