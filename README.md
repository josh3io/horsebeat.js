//time to beat a dead horse

function some_function() {};
var HorseBeater = require('horsebeat');
var num_of_beatings = 5000;
var timeout = 1;
var beater = new HorseBeater(some_function,timeout);
beater.beat(num_of_beatings)
.then(function(beating_count) {
    console.log('some_function was beaten',beating_count,'times');
});
