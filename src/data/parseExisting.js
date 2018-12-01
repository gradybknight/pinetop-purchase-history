const fs = require('fs');
const moment = require('moment')

let orderArray = [];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./existingOrders.csv')
});

moment(Date.now()).format("MM/DD/YY hh:mm")

lineReader.on('line', function (line) {
  let theLine = line.split(',');
  console.log(theLine);
  console.log(moment(theLine[4]).toUnix());
});