var gpio = require('rpi-gpio');

gpio.setup(7, gpio.DIR_OUT, write);

function writetrue() {
  gpio.write(7, true, function(err) {
    if (err) throw err;
    console.log('Written to pin');
    setTimeout(writefalse, 5000);
  });
}


function writefalse() {
  gpio.write(7, false, function(err) {
    if (err) throw err;
    console.log('Written to pin');
    setTimeout(writetrue, 5000);
  });
}

function write(err) {
  if (err) throw err;
  gpio.write(7, true, function(err) {
    if (err) throw err;
    console.log('Written to pin');
    setTimeout(writefalse, 5000);
  });
}
