# gaia_challenge

Example Node project demonstrating how to create a modualar and testable
API Endpoint with sufficient error handling and logging.

: node, express, bluebird, mocha/chai, winston

Promises are used to make 3 asynchronous calls to external API Endpoints 
in a synchronous fashion. Data is processed at each step to
derive the necessary input for the next call, and the final result.

Current Status : In Progress - Application performs the described operations,
but needs refactoring, additional tests, more robust error handling / logging. 

## Getting Started

(more info to come here)

App has mocked data, or live data connections.  This was done to eliminate 
the need for unnecessay hits against the supporting web service, and to speed
development.  Both the live and mocked data utilize the Bluebird Promise library.

To enable with live data: (any or all of them)

...
app/config.json 
            "requestType" : "MOCK" (Can be "MOCK" or "REAL")
...

### More to come!

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