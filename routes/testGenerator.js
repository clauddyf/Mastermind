var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API is working properly');
    // console.log(req.query)
});
// fetch('https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new')
//   .then(reportStatus)

// function checkStatus (res) {
//   if (res.status >= 200 && res.status < 300) {
//     return res
//   } else {
//     let err = new Error(res.statusText)
//     err.response = res
//     throw err
//   }
// }

module.exports = router;