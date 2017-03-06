# gaia_challenge

Example Node project demonstrating how to create a modualar and testable
API Endpoint with sufficient error handling and logging.

: node, express, bluebird, mocha/chai, generators

Promises are used to make 3 asynchronous calls to external API Endpoints 
in a synchronous fashion. Data is processed at each step to
derive the necessary input for the next call, and the final result.

Asynchronous Control Flow is handled primarily by generators.

Current Status : Ready For Review - Application has basic error 
handling with Try/Catch on sync calls and .catch() on async 
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