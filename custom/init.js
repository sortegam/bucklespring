const fs = require('fs');
const rimraf = require('rimraf');
const _sample = require('lodash/sample');
const baseDir = 'base';

const first = ['0', '1', '2', '3', '4', '5', '6', '7'];
const second = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const third = ['0', '1'];

const keyStrokesUP = fs.readdirSync('./baseUP');
const keyStrokesDOWN = fs.readdirSync('./baseDOWN');

first.forEach(f => {
  second.forEach(s => {
    third.forEach(t => {
      if (t === '0') {
        fs.createReadStream(`./baseDOWN/${_sample(keyStrokesDOWN)}`).pipe(fs.createWriteStream(`output/${f}${s}-${t}.wav`));
      }
      if (t === '1') {
        fs.createReadStream(`./baseUP/${_sample(keyStrokesUP)}`).pipe(fs.createWriteStream(`output/${f}${s}-${t}.wav`));
      }
    })
  })
})
