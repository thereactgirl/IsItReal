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
  console.log(data);
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

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
