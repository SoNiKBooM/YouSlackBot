# YouSlackBot

A nodeJS Slack Bot that inserts YouTube videos posted to a Slack channel into a YouTube playlist.

## Getting Started

!! NOT YET ADDED TO NPM !!

### Prerequisites
  * [nodeJS](https://nodejs.org/en/download/package-manager/)
  * [npm](https://docs.npmjs.com/cli/install)
  * [Slack Bot User](https://my.slack.com/services/new/bot) with [API Token](https://api.slack.com/tokens)
  * [Google Account](https://accounts.google.com/SignUp?hl=en)
  * [Google oAuth2 key](https://console.developers.google.com) with [YouTube Data API v3](https://developers.google.com/youTube/v3/) scope.
  * YouTube playlist ID

### ~/.credentials Directory
 
 The ~/.credentials directory is the working directory of YouSlackBot. All bot created files have an underscore prefix.
  To start we will require three separate files, these are:
  * *slackCREDS.json* - This contains the slack API key. eg;
```
module.exports =
{
xoxb: 'YOUR-KEY-HERE' 
}
```

  * *youtubeCREDS.json* - This is the JSON file that can be downloaded from within the Google Developer Console. It looks similar to the example below but with YOUR-X-X properties replaced with your own API properties.
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

  * *playlistID.json* This just contains a simple string with your chosen playlist ID. For example, if the YouTube playlist url is *https://www.youtube.com/playlist?list=PLQso55XhxkgBMeiYmFEHzz1axDUBjTLC6* the file should look like this:
  
```
"PLQso55XhxkgBMeiYmFEHzz1axDUBjTLC6"
```

### Installing

This is a step by step guide on installing YouSlackBot. Please make sure you have all prerequisites above.

Install YouSlackBot with npm:

```
$ npm install YouSlackBot
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Timothy Dell** - *Initial work* - [SoNiKBooM](https://github.com/SoNiKBooM)

## License

This project is still yet to be licensed.

## Acknowledgments

* Google 
* Slack
* StackOverflow
