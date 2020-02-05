const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

router.get('/', function(req, res, next) {
  const url = 'https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=json&rnd=new';
  res.setHeader('content-type', 'application/json')
  fetch(url)
//   res.send((JSON.stringify(fetch(url))))
  .then(res => {
    // fetch(url)
    // .then(data => res.send(JSON.stringify(data)))
//     debugger  
    res.json()})
    .then(data => {
        res.send({data});
    })
    .catch(err => {
        res.send(err)
    });
});


module.exports = router;