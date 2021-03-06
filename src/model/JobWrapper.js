(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Job'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Job'));
  } else {
    // Browser globals (root is window)
    if (!root.IronTitan) {
      root.IronTitan = {};
    }
    root.IronTitan.JobWrapper = factory(root.IronTitan.ApiClient, root.IronTitan.Job);
  }
}(this, function(ApiClient, Job) {
  'use strict';




  /**
   * The JobWrapper model module.
   * @module model/JobWrapper
   * @version 0.4.9
   */

  /**
   * Constructs a new <code>JobWrapper</code>.
   * @alias module:model/JobWrapper
   * @class
   * @param job
   */
  var exports = function(job) {
    var _this = this;

    _this['job'] = job;
  };

  /**
   * Constructs a <code>JobWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobWrapper} obj Optional instance to populate.
   * @return {module:model/JobWrapper} The populated <code>JobWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('job')) {
        obj['job'] = Job.constructFromObject(data['job']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Job} job
   */
  exports.prototype['job'] = undefined;




  return exports;
}));


