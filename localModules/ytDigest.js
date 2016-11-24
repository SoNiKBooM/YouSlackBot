var fs = require('fs');

var VIDEO_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var VIDEO_ID_PATH = VIDEO_DIR + 'video_id.json';

var purgeCache = require('./purgeCache');
var debug = require('./debug').debug;
var getName = require('./getName').getName;

/** Takes complete Slack message object, extracts video id and saves it to VIDEO_ID_PATH
 *
 * @param message, {object} - Parses and strips ID off youtube url - provides console feedback
 *
 ** getYouTubeID Takes url and returns video id in Array[2]
 * @param {string} url
 * @returns {Array[url, removedChars, id]|{index: number, input: string}}
 */

module.exports = function(message) {

    function getYouTubeID(url) {
        return decodeURIComponent(url)
            .match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?\>]*).*/)
    }

    var parsedUrl;
    parsedUrl = getYouTubeID(message.text);  //Passes the text contents of message to getYouTubeID
    var nameId = message.user;

    if (parsedUrl == null) {

        debug.log('ytDigest:message:', getName(nameId) + ': ' + message.text);  //Logs all messages to the console with user name and message text
    }

    else {

        id =  parsedUrl[2];  //The youtube id is in the third array -see above

        debug.log('ytDigest:youtubeInsert:', nameId + ': ' + message.text);  //Logs all messages to the console with user name and message text

        fs.writeFile(VIDEO_ID_PATH, JSON.stringify(id), function(error) {  //write the parsed video ID to VIDEO_ID_PATH
            if (error) throw error;
            debug.log('Video ID parsed and stored to: ' + VIDEO_ID_PATH);
        });
        var youtube = require('./youtube');  //call in youtube module now - so it doesn't run prematurely
        youtube;  //run youtube module - youtube module picks up id from VIDEO_ID_PATH

        purgeCache('./youtube');  //Delete cached module to be ready to run again

    } //eof else

}; //eof top function