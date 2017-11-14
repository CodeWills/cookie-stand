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
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function () {
    var arr = [];
    for (var i = 0; i < hours.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(this.custPerHour() * this.avgSale);
    }
    return arr;
  },
};

var seaTac = {
  name:'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  custPerHour: function () {
    console.log('break',seaTac);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
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
  }
};
