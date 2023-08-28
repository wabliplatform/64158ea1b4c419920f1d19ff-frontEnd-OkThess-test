# TempApi.MoviesApi

All URIs are relative to *https://83.212.100.226:4002/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createmovies**](MoviesApi.md#createmovies) | **POST** /movies | Creates the data
[**deletemovies**](MoviesApi.md#deletemovies) | **DELETE** /movies/{moviesId} | Delete the element
[**getAllmovies**](MoviesApi.md#getAllmovies) | **GET** /movies/getAll | Get all the data
[**getByParamsmovies**](MoviesApi.md#getByParamsmovies) | **GET** /movies/getByParams | Get all the data based on user query
[**getmovies**](MoviesApi.md#getmovies) | **GET** /movies/{moviesId} | Get the element
[**updatemovies**](MoviesApi.md#updatemovies) | **PUT** /movies/{moviesId} | Updates the element



## createmovies

> Movies createmovies(movies)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MoviesApi();
let movies = new TempApi.Movies(); // Movies | data to be created
apiInstance.createmovies(movies, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **movies** | [**Movies**](Movies.md)| data to be created | 

### Return type

[**Movies**](Movies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletemovies

> deletemovies(moviesId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MoviesApi();
let moviesId = "moviesId_example"; // String | the Id parameter
apiInstance.deletemovies(moviesId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **moviesId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllmovies

> [Movies] getAllmovies()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MoviesApi();
apiInstance.getAllmovies((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Movies]**](Movies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsmovies

> [Movies] getByParamsmovies(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MoviesApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsmovies(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[Movies]**](Movies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getmovies

> Movies getmovies(moviesId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MoviesApi();
let moviesId = "moviesId_example"; // String | the Id parameter
apiInstance.getmovies(moviesId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **moviesId** | **String**| the Id parameter | 

### Return type

[**Movies**](Movies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatemovies

> Movies updatemovies(moviesId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MoviesApi();
let moviesId = "moviesId_example"; // String | the Id parameter
let opts = {
  'movies': new TempApi.Movies() // Movies | data to be updated
};
apiInstance.updatemovies(moviesId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **moviesId** | **String**| the Id parameter | 
 **movies** | [**Movies**](Movies.md)| data to be updated | [optional] 

### Return type

[**Movies**](Movies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

