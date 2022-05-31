var gpio = require('rpi-gpio');

const pinnumber = 13;

gpio.setup(pinnumber, gpio.DIR_OUT, write);

function writetrue() {
  gpio.write(pinnumber, true, function(err) {
    if (err) throw err;
    console.log('Written to pin');
    setTimeout(writefalse, 5000);
  });
}


function writefalse() {
  gpio.write(pinnumber, false, function(err) {
    if (err) throw err;
    console.log('Written to pin');
    setTimeout(writetrue, 5000);
  });
}

function write(err) {
  if (err) throw err;
  gpio.write(pinnumber, true, function(err) {
    if (err) throw err;
    console.log('Written to pin');
    setTimeout(writefalse, 5000);
  });
}