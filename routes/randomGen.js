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
        arr.push(parseInt(body[i]));
      }
    }
    return (arr)
   }
  )
  .then(body => res.send(body))
});


module.exports = router;
