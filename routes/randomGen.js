const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

router.get('/', function(req, res, next) {
  const url = 'https://www.random.org/integers/?num=5&min=0&max=7&col=1&base=10&format=plain&rnd=new';
  fetch(url)
  .then(res => res.text()) // the api response was in plain/html format, so I made a res.text() promise
  .then(body => res.send(body)
  )
  .then(body => res.send(body))
});


module.exports = router;
// { // once i grabbed the body, I then noticed the response was index, qith the 0th and 1 index being a line break, and ever
//   let arr =[];
//   for (let i = 1; i <(body.length); i++){
//     if (i % 1 === 0){
//       arr.push(parseInt(body[i]));
//     }
//   }
//   return (arr)
//  }