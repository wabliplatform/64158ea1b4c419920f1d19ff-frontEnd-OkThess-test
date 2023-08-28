# TempApi.DeploysApi

All URIs are relative to *https://83.212.100.226:4002/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createdeploys**](DeploysApi.md#createdeploys) | **POST** /deploys | Creates the data
[**deletedeploys**](DeploysApi.md#deletedeploys) | **DELETE** /deploys/{deploysId} | Delete the element
[**getAlldeploys**](DeploysApi.md#getAlldeploys) | **GET** /deploys/getAll | Get all the data
[**getByParamsdeploys**](DeploysApi.md#getByParamsdeploys) | **GET** /deploys/getByParams | Get all the data based on user query
[**getdeploys**](DeploysApi.md#getdeploys) | **GET** /deploys/{deploysId} | Get the element
[**updatedeploys**](DeploysApi.md#updatedeploys) | **PUT** /deploys/{deploysId} | Updates the element



## createdeploys

> Deploys createdeploys(deploys)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DeploysApi();
let deploys = new TempApi.Deploys(); // Deploys | data to be created
apiInstance.createdeploys(deploys, (error, data, response) => {
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
 **deploys** | [**Deploys**](Deploys.md)| data to be created | 

### Return type

[**Deploys**](Deploys.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletedeploys

> deletedeploys(deploysId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DeploysApi();
let deploysId = "deploysId_example"; // String | the Id parameter
apiInstance.deletedeploys(deploysId, (error, data, response) => {
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
 **deploysId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlldeploys

> [Deploys] getAlldeploys()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DeploysApi();
apiInstance.getAlldeploys((error, data, response) => {
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

[**[Deploys]**](Deploys.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsdeploys

> [Deploys] getByParamsdeploys(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DeploysApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsdeploys(filter, (error, data, response) => {
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

[**[Deploys]**](Deploys.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getdeploys

> Deploys getdeploys(deploysId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DeploysApi();
let deploysId = "deploysId_example"; // String | the Id parameter
apiInstance.getdeploys(deploysId, (error, data, response) => {
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
 **deploysId** | **String**| the Id parameter | 

### Return type

[**Deploys**](Deploys.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatedeploys

> Deploys updatedeploys(deploysId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DeploysApi();
let deploysId = "deploysId_example"; // String | the Id parameter
let opts = {
  'deploys': new TempApi.Deploys() // Deploys | data to be updated
};
apiInstance.updatedeploys(deploysId, opts, (error, data, response) => {
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
 **deploysId** | **String**| the Id parameter | 
 **deploys** | [**Deploys**](Deploys.md)| data to be updated | [optional] 

### Return type

[**Deploys**](Deploys.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

