const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

router.get('/', function(req, res, next) {
  // since the api response format is in plain/html, I used `.text()` to take 
  //in the response and return a promise that resolves with a text object and 
  //once I had the text object, I noticed it had a length property to it, 
  //and that the integers and the line breaks had indices. 
  //I also noticed that the 0th and 1st indices were line breaks and the first random number (respectively),
  // so I decided to push all even indices into the array, omitting the first random digit. 
  // Based off the algorthm, the first random number would be excluded, so I decided to make the call for five integers.
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
