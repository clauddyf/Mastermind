const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

router.get('/', function(req, res, next) {
  const url = 'https://www.random.org/integers/?num=5&min=0&max=7&col=1&base=10&format=plain&rnd=new';
  fetch(url)
  .then(res => res.text()) 
    .then(body => {
      let arr =[];
      for (let i = 1; i <(body.length); i++){
        if (i % 2 === 0){
          arr.push((body[i]));
        }
      }
      return (arr)
    }
  )
  .then(body => res.send(body)) //And then I fullfilled the promise and sent that formatted array body
});


module.exports = router;
