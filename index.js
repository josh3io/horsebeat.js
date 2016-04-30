var Promise = require('bluebird');

function HorseBeat(horse,timeout) {
    this.horse = horse;
    this.beatings = 0;
    if (timeout !== undefined) {
        this.timeout = timeout * 1000;
    }

    this.start = undefined;
}


HorseBeat.prototype.beat = function(howlong) {
    var _this = this;
    if (this.timeout !== undefined) {
        if (this.start === undefined) {
            this.start = new Date().getTime();
        } else {
            var now = new Date().getTime();
            if (this.start + this.timeout < now) {
                return Promise.reject(this.beatings);
            }
        }
    }
    if (howlong !== undefined && howlong < 1) {
        return Promise.resolve(0);
    }
    
    var v = this.horse();
    return Promise.resolve(v).then(function() {
        _this.beatings++;
        if (howlong !== undefined) {
            howlong--;
            if (howlong <= 0) {
                return _this.beatings;
            }
        }
        return _this.beat(howlong);
    });
};

module.exports = HorseBeat;
        
        
