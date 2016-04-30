
var assert = require('assert');
var HorseBeat = require('./index.js');

describe('beating a dead horse',function() {
    it('beats it once',function(done) {
        var cnt=0;
        var beater = new HorseBeat(function() {cnt++ });
        beater.beat(1)
        .then(function(beatings) {
            assert(beatings === 1, 'it was beat once');
            assert(cnt === 1, 'it was counted once');
            done();
        });
    });
    it('beats it twice',function(done) {
        var cnt=0;
        var beater = new HorseBeat(function() {cnt++ });
        beater.beat(2)
        .then(function(beatings) {
            assert(beatings === 2, 'it was beat twice');
            assert(cnt === 2, 'it was counted twice');
            done();
        });
    });
    it('beats it 10000x',function(done) {
        var cnt=0;
        var beater = new HorseBeat(function() {cnt++ });
        beater.beat(10000)
        .then(function(beatings) {
            assert(beatings === 10000, 'it was beat 10000x');
            assert(cnt === 10000, 'it was counted 10000x');
            done();
        });
    });
    it('beats it 0 times',function(done) {
        var cnt=0;
        var beater = new HorseBeat(function() {cnt++ });
        beater.beat(0)
        .then(function(beatings) {
            assert(beatings === 0, 'it was not beat');
            assert(cnt === 0, 'it was not counted');
            done();
        });
    });
    it('beats it forever',function(done) {
        var cnt=0;
        var beater = new HorseBeat(function() {cnt++ },1);
        beater.beat()
        .then(function(beatings) {
            assert(false,'should not happen');
            done();
        })
        .catch(function(beatings) {
            console.log(beatings);
            assert(true, 'timeout a lot of beatings');
            assert(beatings > 10000,'a lot of beatings');
            assert(cnt > 10000,'a high count');
            done();
        });
    });
});
            
