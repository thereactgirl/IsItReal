const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const axios = require('axios')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/percentage', (req, res) => {
  let data = {
    fname: req.body.fname,
    sname: req.body.sname
  }
  const options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: data,
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": process.env.API_HOST,
    },
  };

  axios.request(options)
    .then(result => {
      res.status(200).json(result.data)
    })
    .catch(err => {
      console.log(err);
    })
})

app.post('/zodiac', (req, res) => {
  let { yourName, yourDOB, theirName, theirDOB, year} = req.body
  console.log(req.body)
  var config = {
    method: 'get',
    url: `http://www.starlovematch.com/api/match.php?name=${yourName}&dob=${yourDOB}&name1=${theirName}&dob1=${theirDOB}&sort=O&NC=C&ryr=${year}&details=N&coupon=87088039`,
  };
  axios(config)
  .then(function (response) {
    res.status(200).json(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
