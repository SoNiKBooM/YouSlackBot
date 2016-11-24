# YouSlackBot (work in progress)
------

#### A nodeJS Slack Bot that inserts Youtube videos posted to a Slack channel to a Youtube playlist. 
------

##### Requires:
  * nodeJS
  * npm

##### Packages.json:
  * @slack/client


#### Credentials:
###### /~slackCREDENTIALS.json (xobx Bot integration key)
###### /~ytCREDENTIALS.json (oauth2 json)


#### API's used:
###### Slack
###### YouTube (yet to implement)

------

### TOP NOTES

* start.js is started with **node start.js** in it's dir
* start.js runs modules -**node**JS der!

------

### MODULES:

#### ytDigest
* A module function that accepts a full url as ytLink:
    * If not youtube link, throws console error for debugging currently - //does nothing;
    * If youtube link:
        * strips video ID
        * writes ID to local JSON file in home dir for youtube.js module
        * runs youtube.js
        * purges youtube.js module cache (to run again on link activation)

#### youtube
* Module for oauth2 to google/youtube and uploading.
    * __LOTS of crap to auth__ -_- (UPDATE THIS!!)
    * uploads video id with gapi playlistItems.insert (needs more!!)

#### purgeCache
##### CREDIT: http://stackoverflow.com/a/14801711/6740845
* searches for modules and purges it (useful for running the same module on detection and pulling from a json)



