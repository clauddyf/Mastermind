const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

router.get('/', function(req, res, next) {
  const url = 'https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new';
  res.set('Content-Type', 'application/json')
  fetch(url)
  .then(res => res.text())
  .then(data => console.log(res))
});


module.exports = router;
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