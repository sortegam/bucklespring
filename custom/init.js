const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const _sample = require('lodash/sample');
const sampleBaseDir = './baseSounds';
const sampleDirs = fs.readdirSync(sampleBaseDir);


sampleDirs.forEach(sample => {
  const first = ['0', '1', '2', '3', '4', '5', '6', '7'];
  const second = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  const third = ['0', '1'];

  const baseUPDir = `./tmp/${sample}/baseUP`;
  const baseDOWNDir = `./tmp/${sample}/baseDOWN`;
  const keyStrokesUP = fs.readdirSync(baseUPDir);
  const keyStrokesDOWN = fs.readdirSync(baseDOWNDir);

  first.forEach(f => {
    second.forEach(s => {
      third.forEach(t => {
        if (t === '0') {
          fs.createReadStream(`${baseDOWNDir}/${_sample(keyStrokesDOWN)}`).pipe(fs.createWriteStream(`output/${sample}/${f}${s}-${t}.wav`));
        }
        if (t === '1') {
          fs.createReadStream(`${baseUPDir}/${_sample(keyStrokesUP)}`).pipe(fs.createWriteStream(`output/${sample}${f}${s}-${t}.wav`));
        }
      });
    });
  });
});
