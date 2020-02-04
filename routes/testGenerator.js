const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

router.get('/', function(req, res, next) {
  const url = 'https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new';
  
  fetch(url)  
  .then(res => res)
  .then(data => {
      res.send({data});
  })
  .catch(err => {
      res.send(err)
  });
});


module.exports = router;