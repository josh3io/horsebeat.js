time to beat a dead horse


    var HorseBeater = require('horsebeat');

    function horse() {};


    // stop after 1 second. do not set timeout or set to undefined to beat the horse forever
    var timeout = 1;

    // beat the horse an explicit number of times. do not set or set undefined to beat the horse until timeout is reached
    var num_of_beatings = 5000;

    var beater = new HorseBeater(horse,timeout);
    beater.beat(num_of_beatings)
    .then(function(beating_count) {
        console.log('some_function was beaten',beating_count,'times');
    });
