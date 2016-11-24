var fs = require('fs');
var RtmClient = require('@slack/client').RtmClient;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

var ytDigest = require('./localModules/ytDigest');
var debug = require('./localModules/debug').debug;
var createUserList = require('./localModules/userList').createUserList;
var getName = require('./localModules/getName').getName;

var USER_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var auth = require(USER_DIR + 'slackCREDS').xoxb;

var rtm = new RtmClient(auth);

/**
 * Connects to the slack channel and is also used to
 * start up other required modules.
 */
rtm.start(
    debug.log('Slack Connected.'),
    createUserList()
); // eof rtm.start


/**
 * Turns the message events on and passes it along to look
 * for various components within the message text body.
 * 
 * rtm.on
 * Turns on message event watching.
 *
 ** handleRtmMessage Handles incoming message events from Slack
 ** @param {object} message  Contains incoming message object from Slack
 */
rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {

    if (message.type == undefined || message.text == undefined) {} // Detects Slack's returned auto events (eg. new youtube link previews) and then does nothing

    else if (message.type == 'message' && message.text != '') { // If message type is a message and not empty

    var nameId = getName(message.user); // Sets nameId as the actual name of the message user not the ID

    if (message.text != undefined && message.text.indexOf("youtu") >= 0) { // looks for youtube links and parses the ID with ytDigest module function in ./localModules/ - then logs message to console

        ytDigest(message); // sends whole message object to be parsed and uploaded to youtube playlist

      }

    else {

        debug.log('start.js:message:', nameId + ': ' + message.text); // Logs all messages to the console with user name and message text

        }

    } // eof else if

}); // eof rtm.on