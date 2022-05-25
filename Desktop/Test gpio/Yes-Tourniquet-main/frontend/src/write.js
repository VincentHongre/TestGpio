var gpio = require('rpi-gpio');

gpio.setup(12, gpio.DIR_OUT, write);

function writefalse() {
  gpio.write(12, false, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}

function write(err) {
    if (err) throw err;
    gpio.write(12, true, function(err) {
        if (err) throw err;
        console.log('Written to pin');
        setTimeout(writefalse, 5000);
    });
}