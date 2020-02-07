const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

router.get('/', function(req, res, next) {
  const url = 'https://www.random.org/integers/?num=5&min=0&max=7&col=1&base=10&format=plain&rnd=new';
  // Since the api response is in plain/html, I used .text() to take in the response and return a promise that resolves with a text object
  // And once I had the text object, I notticed it had a length property to it, and that the integers
  // and the line breaks had indices. I also noticed that the 0th and 1st indices were line breaks and a bracket (respectively),
  // so I decided to push all even indices into the array.
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
  .then(body => res.send(body))
});


module.exports = router;
