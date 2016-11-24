/**
 * Adds a date and time stamp to console log -usage: debug.log()
 * @type {{log}}
 */
var debug = (function(){

    var timestamp = function(){};

    timestamp.toString = function(){

        return '\n[' +  (new Date).toLocaleDateString() + ' ' + (new Date).toLocaleTimeString() + ']';

    };

    return {

        log: console.log.bind(console, '%s', timestamp)

    }

})(); //eof debug

exports.debug = debug;