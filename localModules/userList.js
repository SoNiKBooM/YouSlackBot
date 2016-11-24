var fs = require('fs');

var USER_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var USER_ID_PATH = USER_DIR + 'user_ids.json';
var auth = require(USER_DIR + 'slackCREDS').xoxb;

var WebClient = require('@slack/client').WebClient;
var web = new WebClient(auth);

var debug = require('./debug').debug;

/**
 * createUserList()
 * Writes a complete list of current user objects to a JSON located at USER_ID_PATH
 *
 ** web.users.list(function()) Calls the SlackAPI function
 ** @param err
 ** @param info Contains complete returned user list JSON object
 */
function createUserList() {

    web.users.list(function (err, info) { // slack api, info returns a current user listing in json


        if (err) {
            console.log('web.users.list.error: ', err);
            return;
        }

        var nameById = {}; /** !! THIS IS NOT BEING USED ANYWHERE !! same as line: 37 !! */

        fs.writeFile(USER_ID_PATH, JSON.stringify(info), (err) => {
            if (err) {
                console.log('start.js:error writing user list: ' + err)
            }

            debug.log('User list created at ' + USER_ID_PATH);
        })



    }); // eof web.users.list

} // eof createUserList

exports.createUserList = createUserList;