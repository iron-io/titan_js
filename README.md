# titan-api

TitanApi - JavaScript client for titan-api
The ultimate, language agnostic, container based job processing framework.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API verion: 0.2.4
- Package version: 0.2.4
- Build date: 2016-03-30T18:20:42.853Z
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install titan-api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/titan-api
then install it via:

```shell
npm install YOUR_USERNAME/titan-api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TitanApi = require('titan-api');

var api = new TitanApi.CoreApi()

var id = "id_example"; // {String} Job id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.jobIdDelete(id, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:8080/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TitanApi.CoreApi* | [**jobIdDelete**](docs/CoreApi.md#jobIdDelete) | **DELETE** /job/{id} | Delete the job.
*TitanApi.CoreApi* | [**jobIdGet**](docs/CoreApi.md#jobIdGet) | **GET** /job/{id} | Gets job by id
*TitanApi.CoreApi* | [**jobsConsumeGet**](docs/CoreApi.md#jobsConsumeGet) | **GET** /jobs/consume | Get next job.
*TitanApi.CoreApi* | [**jobsPost**](docs/CoreApi.md#jobsPost) | **POST** /jobs | Enqueue Job
*TitanApi.ImagesApi* | [**imageIdGet**](docs/ImagesApi.md#imageIdGet) | **GET** /image/{id} | Get information for image id.
*TitanApi.ImagesApi* | [**imagesGet**](docs/ImagesApi.md#imagesGet) | **GET** /images | Get all image names.
*TitanApi.JobsApi* | [**jobIdCancelPost**](docs/JobsApi.md#jobIdCancelPost) | **POST** /job/{id}/cancel | Cancel a job.
*TitanApi.JobsApi* | [**jobIdDelete**](docs/JobsApi.md#jobIdDelete) | **DELETE** /job/{id} | Delete the job.
*TitanApi.JobsApi* | [**jobIdFailPost**](docs/JobsApi.md#jobIdFailPost) | **POST** /job/{id}/fail | Mark job as failed.
*TitanApi.JobsApi* | [**jobIdGet**](docs/JobsApi.md#jobIdGet) | **GET** /job/{id} | Gets job by id
*TitanApi.JobsApi* | [**jobIdLogGet**](docs/JobsApi.md#jobIdLogGet) | **GET** /job/{id}/log | Get the log of a completed job.
*TitanApi.JobsApi* | [**jobIdRetryPost**](docs/JobsApi.md#jobIdRetryPost) | **POST** /job/{id}/retry | Retry a job.
*TitanApi.JobsApi* | [**jobIdSuccessPost**](docs/JobsApi.md#jobIdSuccessPost) | **POST** /job/{id}/success | Mark job as succeeded.
*TitanApi.JobsApi* | [**jobIdTouchPost**](docs/JobsApi.md#jobIdTouchPost) | **POST** /job/{id}/touch | Extend job timeout.
*TitanApi.JobsApi* | [**jobsConsumeGet**](docs/JobsApi.md#jobsConsumeGet) | **GET** /jobs/consume | Get next job.
*TitanApi.JobsApi* | [**jobsGet**](docs/JobsApi.md#jobsGet) | **GET** /jobs | Peek at list of jobs.
*TitanApi.JobsApi* | [**jobsPost**](docs/JobsApi.md#jobsPost) | **POST** /jobs | Enqueue Job


## Documentation for Models

 - [TitanApi.Error](docs/Error.md)
 - [TitanApi.ErrorBody](docs/ErrorBody.md)
 - [TitanApi.IdStatus](docs/IdStatus.md)
 - [TitanApi.Image](docs/Image.md)
 - [TitanApi.ImageWrapper](docs/ImageWrapper.md)
 - [TitanApi.ImagesWrapper](docs/ImagesWrapper.md)
 - [TitanApi.Job](docs/Job.md)
 - [TitanApi.JobSubmission](docs/JobSubmission.md)
 - [TitanApi.JobSubmissionWithImage](docs/JobSubmissionWithImage.md)
 - [TitanApi.JobSubmissionsWrapper](docs/JobSubmissionsWrapper.md)
 - [TitanApi.JobWrapper](docs/JobWrapper.md)
 - [TitanApi.JobsWrapper](docs/JobsWrapper.md)
 - [TitanApi.Reason](docs/Reason.md)


## Documentation for Authorization

 All endpoints do not require authorization.

