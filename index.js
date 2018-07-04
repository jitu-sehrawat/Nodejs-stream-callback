const dataAPI = require('./dataAPI');

function getData(){
  dataAPI(true, (datastream) => {
    datastream.on('data', (chunk) => {
      chunk.age = 27;
      console.log(`Received ${JSON.stringify(chunk)} \n`);
    });
    datastream.on('end', () => {
      console.log('There will be no more data.');
    });
  });
};

getData();