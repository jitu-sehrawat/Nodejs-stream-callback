var promise1 = Promise.resolve(3);

var proArray  = [];
proArray.push(promise1);

var obj = {
    'id': 1,
    "name": 'Jeetu'
}
if(typeof obj === 'object') {
    console.log('OK');
    proArray.push(qwe())
}


Promise.all(proArray).then(function(values) {
    asd();
    console.log(values);
});

function asd() {
    console.log("HELLO");
}

function qwe() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 5000, 'foo');
    })
}