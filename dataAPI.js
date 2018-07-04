const streams = require('stream');
const a = [{
  id: 1,
  name: 'A1'
}, {
  id: 2,
  name: 'A2'
}, {
  id: 3,
  name: 'A3'
}, {
  id: 4,
  name: 'A4'
}, {
  id: 5,
  name: 'A5'
}];

var i = -1;

function fetchData(callback) {
  setInterval(function () {
  var stream = new streams.PassThrough({ 'objectMode': true });
    i = i+1;
    if(a[i] != undefined) { 
      stream.push(a[i]);
      callback(stream); 
    }
    if (i == a.length) {
      stream.end();
      callback(stream);
      clearInterval(this);
    }
  }, 100);
}

// fetchData();

module.exports = function(options, callback){

  if(options) {
    fetchData(callback);
  } else {
    callback(null);
  }
};