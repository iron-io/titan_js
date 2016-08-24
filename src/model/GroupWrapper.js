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
    define(['ApiClient', 'model/Group'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Group'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkerJs) {
      root.WorkerJs = {};
    }
    root.WorkerJs.GroupWrapper = factory(root.WorkerJs.ApiClient, root.WorkerJs.Group);
  }
}(this, function(ApiClient, Group) {
  'use strict';




  /**
   * The GroupWrapper model module.
   * @module model/GroupWrapper
   * @version 0.5.2
   */

  /**
   * Constructs a new <code>GroupWrapper</code>.
   * @alias module:model/GroupWrapper
   * @class
   * @param group {module:model/Group} 
   */
  var exports = function(group) {
    var _this = this;

    _this['group'] = group;
  };

  /**
   * Constructs a <code>GroupWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupWrapper} obj Optional instance to populate.
   * @return {module:model/GroupWrapper} The populated <code>GroupWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('group')) {
        obj['group'] = Group.constructFromObject(data['group']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Group} group
   */
  exports.prototype['group'] = undefined;



  return exports;
}));


