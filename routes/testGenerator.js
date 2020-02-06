const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

router.get('/', function(req, res, next) {
  const url = 'https://www.random.org/integers/?num=11&min=1&max=6&col=1&base=10&format=plain&rnd=new';
  fetch(url)
  .then(res => res.text())
  .then(body => {
    let arr =[];

    for (let i = 1; i <(body.length); i++){
      if (i % 2 === 0){
        let obj = {};
        obj[body[i]] = i;
        arr.push(obj);
      }
    }
    return (arr)
   }
  
  )
  .then(body => res.send(body))
});


module.exports = router;


// jsonrpc: "2.0",
//     method: "generateIntegers",
//     params: {
//         "apiKey": "6b1e65b9-4186-45c2-8981-b77a9842c4f0",
//         "n": 6,
//         "min": 1,
//         "max": 6,
//         "replacement": true
//     },
//     id: 42
// let arr = [];

// {
//   method: 'get',
//   headers: {
//     'Content-Type': 'application/json'
//   },

// // we loop from 1 to 1 less than the length because
// // the first two elements are empty due to the way the split worked
// for (let i = 1, l = res.length - 1; i < l; i++) {
  //   let obj = {};
  //   obj[res[i]] = i;
  //   arr.push(obj);
  // }
  // return JSON.stringify(arr);

  //   res.send((JSON.stringify(fetch(url))))


  // fetch(url)
  // .then(data => res.send(JSON.stringify(data)))
//     debugger  