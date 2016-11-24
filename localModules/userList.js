var fs = require('fs');

var auth = require('../../slackCREDENTIALS').xoxb; /**!! CHANGE THIS TO ~/.credentials file !!**/

var WebClient = require('@slack/client').WebClient;
var web = new WebClient(auth);

var debug = require('./debug').debug;

var USER_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var USER_ID_PATH = USER_DIR + 'user_ids.json';


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
                console.log('start.js: nameById: ' + err)
            }

        })

        info.members.forEach((user) => { // for each user, add id as key and name as value to USER_ID_PATH

            nameById[user.id] = user.name; /** !! THIS IS NOT BEING USED ANYWHERE !! **/

        }) // eof info.members.forEach

    debug.log('User list created at ' + USER_ID_PATH);

    }); // eof web.users.list

} // eof createUserList

exports.createUserList = createUserList;