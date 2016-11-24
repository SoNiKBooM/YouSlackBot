# YouSlackBot

A nodeJS Slack Bot that inserts YouTube videos posted to a Slack channel into a YouTube playlist.

## Getting Started

[Installation](#installing)

For contributions, please see [Contributing](#contributing) section below.

Feedback is always welcome. 
  
  Enjoy! :)

### Prerequisites
  * [nodeJS and npm](https://docs.npmjs.com/getting-started/installing-node)
  * [Slack Bot User](https://my.slack.com/services/new/bot) with [API Token](https://api.slack.com/tokens)
  * [Google Account](https://accounts.google.com/SignUp?hl=en)
  * [Google oAuth2 key](https://console.developers.google.com) with [YouTube Data API v3](https://developers.google.com/youTube/v3/) scope.
  * YouTube playlist ID

### The ~/.credentials Directory
 
 The ~/.credentials directory is the working directory of YouSlackBot. There are two types of files kept here, user files and bot files. All bot created files have an underscore prefix.
  
To start the bot we will first require three separate files added to the ~/.credentials directory by the user, these are:
  
  * **slackCREDS.json** - This contains the slack API key. eg;
```
module.exports =
{
xoxb: 'YOUR-KEY-HERE' 
}
```
  
  * **youtubeCREDS.json** - This is the JSON file that can be downloaded from within the Google Developer Console. It looks similar to the example below but with YOUR-X-X properties replaced with your own API properties.
```
{
"installed":
        {
        "client_id":"YOUR-CLIENT-ID",
        "project_id":"YOUR-PROJECT-ID",
        "auth_uri":"https://accounts.google.com/o/oauth2/auth",
        "token_uri":"https://accounts.google.com/o/oauth2/token",
        "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
        "client_secret":"YOUR-CLIENT-SECRET",
        "redirect_uris":[YOUR-REDIRECT-URIS]
        }
}

```
  
  * **playlistID.json** This just contains a simple string with your chosen playlist ID. For example, if the YouTube playlist url is *https://www.youtube.com/playlist?list=PLQso55XhxkgBMeiYmFEHzz1axDUBjTLC6* the file should look like this:
  
```
"PLQso55XhxkgBMeiYmFEHzz1axDUBjTLC6"
```

### Installing

This is a step by step guide on installing YouSlackBot. Please make sure you have all prerequisites above and the required files in ~/.credentials as above.

Install YouSlackBot with npm

```
$ npm install YouSlackBot
```

Start the bot with node.

```
$ sudo node node_modules/YouSlackBot/start.js
```
    
Invite YouSlackBot to the Slack Channel you want it to watch.
Example, inside the desired channel type:
```
/invite YOUR-BOT-NAME
```
  
You should see that the bot is now online in Slack.

**IMPORTANT:** On the first YouTube API request, you will be prompted to visit a URL from google to receive the API key. This prompt is in console and will **not** work without entering the returned key. You can initiate this by posting a valid YouYube video URL into the slack Channel and going back to the console. This only needs to be done once.  

## Contributing

Please read [CONTRIBUTING.md](https://github.com/SoNiKBooM/YouSlackBot/blob/dev/CONTRIBUTING.md) for details on my code of conduct, and the process for submitting pull requests to me.

## Authors

* **Timothy Dell** - *Initial work* - [SoNiKBooM](https://github.com/SoNiKBooM)

## License

This project is licensed under the MIT License - see the [LICENSE.MD](https://github.com/SoNiKBooM/YouSlackBot/blob/dev/LICENSE.MD) file for details

## Acknowledgments

* Google 
* Slack
* StackOverflow
