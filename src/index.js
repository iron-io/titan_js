/**
 * IronWorker CE API
 * The ultimate, language agnostic, container based task processing framework.
 *
 * OpenAPI spec version: 0.5.0
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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Complete', 'model/Error', 'model/ErrorBody', 'model/Group', 'model/GroupWrapper', 'model/GroupsWrapper', 'model/IdStatus', 'model/NewTask', 'model/NewTasksWrapper', 'model/Start', 'model/Task', 'model/TaskWrapper', 'model/TasksWrapper', 'api/GroupsApi', 'api/RunnerApi', 'api/TasksApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Complete'), require('./model/Error'), require('./model/ErrorBody'), require('./model/Group'), require('./model/GroupWrapper'), require('./model/GroupsWrapper'), require('./model/IdStatus'), require('./model/NewTask'), require('./model/NewTasksWrapper'), require('./model/Start'), require('./model/Task'), require('./model/TaskWrapper'), require('./model/TasksWrapper'), require('./api/GroupsApi'), require('./api/RunnerApi'), require('./api/TasksApi'));
  }
}(function(ApiClient, Complete, Error, ErrorBody, Group, GroupWrapper, GroupsWrapper, IdStatus, NewTask, NewTasksWrapper, Start, Task, TaskWrapper, TasksWrapper, GroupsApi, RunnerApi, TasksApi) {
  'use strict';

  /**
   * The_ultimate_language_agnostic_container_based_task_processing_framework_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var IronJs = require('index'); // See note below*.
   * var xxxSvc = new IronJs.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new IronJs.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new IronJs.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new IronJs.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.5.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Complete model constructor.
     * @property {module:model/Complete}
     */
    Complete: Complete,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorBody model constructor.
     * @property {module:model/ErrorBody}
     */
    ErrorBody: ErrorBody,
    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group: Group,
    /**
     * The GroupWrapper model constructor.
     * @property {module:model/GroupWrapper}
     */
    GroupWrapper: GroupWrapper,
    /**
     * The GroupsWrapper model constructor.
     * @property {module:model/GroupsWrapper}
     */
    GroupsWrapper: GroupsWrapper,
    /**
     * The IdStatus model constructor.
     * @property {module:model/IdStatus}
     */
    IdStatus: IdStatus,
    /**
     * The NewTask model constructor.
     * @property {module:model/NewTask}
     */
    NewTask: NewTask,
    /**
     * The NewTasksWrapper model constructor.
     * @property {module:model/NewTasksWrapper}
     */
    NewTasksWrapper: NewTasksWrapper,
    /**
     * The Start model constructor.
     * @property {module:model/Start}
     */
    Start: Start,
    /**
     * The Task model constructor.
     * @property {module:model/Task}
     */
    Task: Task,
    /**
     * The TaskWrapper model constructor.
     * @property {module:model/TaskWrapper}
     */
    TaskWrapper: TaskWrapper,
    /**
     * The TasksWrapper model constructor.
     * @property {module:model/TasksWrapper}
     */
    TasksWrapper: TasksWrapper,
    /**
     * The GroupsApi service constructor.
     * @property {module:api/GroupsApi}
     */
    GroupsApi: GroupsApi,
    /**
     * The RunnerApi service constructor.
     * @property {module:api/RunnerApi}
     */
    RunnerApi: RunnerApi,
    /**
     * The TasksApi service constructor.
     * @property {module:api/TasksApi}
     */
    TasksApi: TasksApi
  };

  return exports;
}));
