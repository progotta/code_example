# Code Example

## Requirements:
Create an endpoint that returns the longest preview media URL. The endpoint should be defined as /v1/api/term/{tid}/longest-preview-media-url. {tid} will be used to supply an initial, internal API call to the Gaia backend.

Your response from the endpoint should look something like this: { “bcHLS”: "https://www.gaia.com/api/brightcove/proxy/96371/master.m3u8?expiration=1455832800&token=c522231dbad02ae0d5a9676c8c9f9d8df86d2181280df53b46ab0b24b257458a”, “titleNid": 100176, "previewNid": 96371, “previewDuration": 90 }

There are three endpoints you will need to use to accomplish this task: http://d6api.gaia.com/vocabulary/1/{tid} http://d6api.gaia.com/videos/term/{tid} http://d6api.gaia.com/media/{previewNid}

Calls to the endpoints above should include the header Accept: application/json.

First, you’ll first need to hit http://d6api.gaia.com/vocabulary/1/{tid} using the {tid} URL parameter in your endpoint path. Use 26681 for a testing {tid}. From this response, you’ll need to grab the first tid (26686) from the first object in the array from the terms property.

Second, you’ll hit http://d6api.gaia.com/videos/term/{tid} and supply {tid} with 26686 (retrieved programmatically).

Third, you’ll need to iterate over the response from http://d6api.gaia.com/videos/term/26686 and identify the preview nid (titles[i].preview.nid) that has the longest duration value (titles[i].preview.duration) from the array of objects from the titles property.

Finally, you’ll hit http://d6api.gaia.com/media/{nid} with the appropriate preview nid you determined in step 3. You’ll want to capture the URL from mediaUrls.bcHLS to include in your endpoint response.

Requirements:

Create a public Github repo
Must use Express library
Must use Bluebird promise library
Endpoint must return JSON
Errors must be handled and appropriate HTTP status codes returned


## Solution
I didn't know what version of node it was supposed to be done in, and how much 
ES6 support would be desired, so this has a bit of a mixture.  The requirements
do not specify tests, but I included some example Mocha/Chai Unit and Integration Tests.
Also, there is no Authentication/Authorization - though I would handle that through
another service and middleware to check it.  JWT preferred...

Example Node/Express API Endpoint(GET) utilizing promises and generators. 

: node, express, bluebird, mocha/chai, generators

Promises are used to make 3 asynchronous calls to external API Endpoints 
in a synchronous fashion. Data is processed at each step to
derive the necessary input for the next call, and the final result.

Asynchronous Control Flow is handled primarily by generators.

Application has basic error handling with Try/Catch on sync calls and .catch() on async 
through promises.  Application has a number of test cases, though
just an example and does not provide full coverage. 

## Mocked and Live Data Settings

App has mocked data, or live data connections.  This was done to eliminate 
the need for unnecessay hits against the supporting web service, and to speed
development.  Both the live and mocked data utilize the Bluebird Promise library.

To enable with live data: (any or all of them)
...
/config.json 
            "requestType" : "MOCK" (Can be "MOCK" or "REAL")
...

 

<!--
### Prerequisites
(placeholder)

### Installing

(placeholder)

## Running the tests

(placeholder)

### Break down into end to end tests

(placeholder)

### And coding style tests

(placeholder)

## Deployment

(placeholder)

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
-->
