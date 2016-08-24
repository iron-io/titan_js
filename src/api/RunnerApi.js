/**
 * IronWorker CE API
 * The ultimate, language agnostic, container based task processing framework.
 *
 * OpenAPI spec version: 0.5.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TaskWrapper', 'model/Complete', 'model/Error', 'model/IdStatus', 'model/Start'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TaskWrapper'), require('../model/Complete'), require('../model/Error'), require('../model/IdStatus'), require('../model/Start'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkerJs) {
      root.WorkerJs = {};
    }
    root.WorkerJs.RunnerApi = factory(root.WorkerJs.ApiClient, root.WorkerJs.TaskWrapper, root.WorkerJs.Complete, root.WorkerJs.Error, root.WorkerJs.IdStatus, root.WorkerJs.Start);
  }
}(this, function(ApiClient, TaskWrapper, Complete, Error, IdStatus, Start) {
  'use strict';

  /**
   * Runner service.
   * @module api/RunnerApi
   * @version 0.5.2
   */

  /**
   * Constructs a new RunnerApi. 
   * @alias module:api/RunnerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the groupsNameTasksIdErrorPost operation.
     * @callback module:api/RunnerApi~groupsNameTasksIdErrorPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark task as failed.
     * Task is marked as failed if it was in a valid state. Task&#39;s &#x60;finished_at&#x60; time is initialized.
     * @param {String} name Name of group for this set of tasks.
     * @param {String} id Task id
     * @param {module:model/Complete} body 
     * @param {module:api/RunnerApi~groupsNameTasksIdErrorPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskWrapper}
     */
    this.groupsNameTasksIdErrorPost = function(name, id, body, callback) {
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameTasksIdErrorPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsNameTasksIdErrorPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling groupsNameTasksIdErrorPost";
      }


      var pathParams = {
        'name': name,
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskWrapper;

      return this.apiClient.callApi(
        '/groups/{name}/tasks/{id}/error', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNameTasksIdStartPost operation.
     * @callback module:api/RunnerApi~groupsNameTasksIdStartPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark task as started, ie: status &#x3D; &#39;running&#39;
     * Task status is changed to &#39;running&#39; if it was in a valid state before. Task&#39;s &#x60;started_at&#x60; time is initialized.
     * @param {String} name Name of group for this set of tasks.
     * @param {String} id Task id
     * @param {module:model/Start} body 
     * @param {module:api/RunnerApi~groupsNameTasksIdStartPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskWrapper}
     */
    this.groupsNameTasksIdStartPost = function(name, id, body, callback) {
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameTasksIdStartPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsNameTasksIdStartPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling groupsNameTasksIdStartPost";
      }


      var pathParams = {
        'name': name,
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskWrapper;

      return this.apiClient.callApi(
        '/groups/{name}/tasks/{id}/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsNameTasksIdSuccessPost operation.
     * @callback module:api/RunnerApi~groupsNameTasksIdSuccessPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark task as succeeded.
     * Task status is changed to succeeded if it was in a valid state before. Task&#39;s &#x60;completed_at&#x60; time is initialized.
     * @param {String} name Name of group for this set of tasks.
     * @param {String} id Task id
     * @param {module:model/Complete} body 
     * @param {module:api/RunnerApi~groupsNameTasksIdSuccessPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskWrapper}
     */
    this.groupsNameTasksIdSuccessPost = function(name, id, body, callback) {
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling groupsNameTasksIdSuccessPost";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling groupsNameTasksIdSuccessPost";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling groupsNameTasksIdSuccessPost";
      }


      var pathParams = {
        'name': name,
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskWrapper;

      return this.apiClient.callApi(
        '/groups/{name}/tasks/{id}/success', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
