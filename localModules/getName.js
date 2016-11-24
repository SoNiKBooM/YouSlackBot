var USER_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var USER_ID_PATH = USER_DIR + '_user_ids.json';


/**
 * Returns the actual name from a user object with a given user ID from Slack
 * @param {string} id Slack User ID
 * @returns {*} Slack User Name
 */

function getName(id) {

    var userList = require(USER_ID_PATH);

    var members = userList["members"];

    for (var i = 0; i < members.length; i++) { // For each object inside member compare member id's, return member name

        if (members[i]["id"] == id) {

            return members[i]["name"];

        } //eof if
    } //eof for
} //eof getName function

exports.getName = getName;