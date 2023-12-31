/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Deploys model module.
 * @module model/Deploys
 * @version 1.0.0
 */
class Deploys {
    /**
     * Constructs a new <code>Deploys</code>.
     * @alias module:model/Deploys
     * @param deploy {String} 
     */
    constructor(deploy) { 
        
        Deploys.initialize(this, deploy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, deploy) { 
        obj['deploy'] = deploy;
    }

    /**
     * Constructs a <code>Deploys</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Deploys} obj Optional instance to populate.
     * @return {module:model/Deploys} The populated <code>Deploys</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Deploys();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('deploy')) {
                obj['deploy'] = ApiClient.convertToType(data['deploy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Deploys.prototype['_id'] = undefined;

/**
 * @member {String} deploy
 */
Deploys.prototype['deploy'] = undefined;






export default Deploys;

