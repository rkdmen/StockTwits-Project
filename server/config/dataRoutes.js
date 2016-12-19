'use strict';

let express = require('express');
let router = express.Router();
let request = require('request');
let fs = require('fs');

router.post('/dataJSON', (req, res) => {
  let symb;
  let symbol = req.body.symbol;
  let JSONData = JSON.parse(fs.readFileSync('./data/stock-data.json', 'utf8'));

  if(JSONData.length < 5){
      JSONData.push({symbol:symbol});
    fs.writeFile('./data/stock-data.json', JSON.stringify(JSONData, null, 2), 'utf-8', (err) => {
      if (err) {
        console.error(err);
      } else {
         res.sendStatus(200);
      }
    });
  } else {
    res.sendStatus(200)
  }
});

router.get('/dataJSON', (req, res) => {
  let JSONData = JSON.parse(fs.readFileSync('./data/stock-data.json', 'utf8'));
  res.send(JSONData);
});

router.delete('/dataJSON/:symb', (req, res) => {
  let JSONData = JSON.parse(fs.readFileSync('./data/stock-data.json', 'utf8'));
  let id = req.params.symb;
  console.log(id, ' deleting ID');
  JSONData.splice(id, 1);

  fs.writeFile('./data/stock-data.json', JSON.stringify(JSONData, null, 2), 'utf-8', (err) => {
    if (err) {
      console.error(err);
    } else {
       res.sendStatus(200);
    }
  });
})

module.exports = router;



