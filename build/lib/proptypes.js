"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.checkProptypes=checkProptypes;var _propTypes=_interopRequireDefault(require("prop-types"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function checkProptypes(propTypes,props,componentName){const t=console.error;try{console.error=msg=>{throw new Error(msg)};_propTypes.default.checkPropTypes(propTypes,props,"prop",componentName)}finally{console.error=t}}
//# sourceMappingURL=proptypes.js.map