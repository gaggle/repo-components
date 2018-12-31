"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _style=_interopRequireDefault(require("styled-jsx/style"));var _reactIonicons=_interopRequireDefault(require("react-ionicons"));var _link=_interopRequireDefault(require("next/link"));var _propTypes=_interopRequireDefault(require("prop-types"));var _react=_interopRequireWildcard(require("react"));var _RenderIfElse=_interopRequireDefault(require("../../renderprops/RenderIfElse"));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;return newObj}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}class Issues extends _react.Component{render(){const Element=()=>_react.default.createElement(_react.Fragment,null,_react.default.createElement(_reactIonicons.default,{className:"info-icon",icon:"md-information-circle",fontSize:"1em",style:{verticalAlign:"middle",marginBottom:"3px"}}),_react.default.createElement("span",{className:"jsx-2172188006"+" "+"text"},this.props.count),_react.default.createElement(_style.default,{styleId:"2172188006",css:".text.jsx-2172188006{padding-left:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2doL0lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QnlCLEFBRzRCLGlCQUNuQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9naC9Jc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW9uaWNvbiBmcm9tICdyZWFjdC1pb25pY29ucydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBSZW5kZXJJZkVsc2UgZnJvbSAnLi4vLi4vcmVuZGVycHJvcHMvUmVuZGVySWZFbHNlJ1xuXG5jbGFzcyBJc3N1ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvdW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgRWxlbWVudCA9ICgpID0+IDxGcmFnbWVudD5cbiAgICAgIDxJb25pY29uIGNsYXNzTmFtZT1cImluZm8taWNvblwiXG4gICAgICAgICAgICAgICBpY29uPVwibWQtaW5mb3JtYXRpb24tY2lyY2xlXCJcbiAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMWVtXCJcbiAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICczcHgnLFxuICAgICAgICAgICAgICAgfX0vPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPnt0aGlzLnByb3BzLmNvdW50fTwvc3Bhbj5cbiAgICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCI+e2BcbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cblxuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJpc3N1ZXMtYmFkZ2VcIiB0aXRsZT17YCR7dGhpcy5wcm9wcy5jb3VudH0gb3BlbiBpc3N1ZXNgfT5cbiAgICAgICAgPFJlbmRlcklmRWxzZVxuICAgICAgICAgIHRlc3Q9e3RoaXMucHJvcHMuaHJlZn1cbiAgICAgICAgICBwYXNzPXsoKSA9PiA8TGluayBocmVmPXt0aGlzLnByb3BzLmhyZWZ9PjxhPjxFbGVtZW50Lz48L2E+PC9MaW5rPn1cbiAgICAgICAgICBmYWlsPXsoKSA9PiA8RnJhZ21lbnQ+PEVsZW1lbnQvPjwvRnJhZ21lbnQ+fS8+XG4gICAgICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCI+e2BcbiAgICAgICAgICAuaXNzdWVzLWJhZGdlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElzc3Vlc1xuIl19 */\n/*@ sourceURL=../../../src/components/gh/Issues.js */"}));return _react.default.createElement("span",{title:`${this.props.count} open issues`,className:"jsx-2722208569"+" "+"issues-badge"},_react.default.createElement(_RenderIfElse.default,{test:this.props.href,pass:()=>_react.default.createElement(_link.default,{href:this.props.href},_react.default.createElement("a",{className:"jsx-2722208569"},_react.default.createElement(Element,null))),fail:()=>_react.default.createElement(_react.Fragment,null,_react.default.createElement(Element,null))}),_react.default.createElement(_style.default,{styleId:"2722208569",css:".issues-badge.jsx-2722208569{display:inline-block;white-space:nowrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2doL0lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQzJCLEFBR2tDLHFCQUNGLG1CQUNyQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9naC9Jc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW9uaWNvbiBmcm9tICdyZWFjdC1pb25pY29ucydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBSZW5kZXJJZkVsc2UgZnJvbSAnLi4vLi4vcmVuZGVycHJvcHMvUmVuZGVySWZFbHNlJ1xuXG5jbGFzcyBJc3N1ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvdW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgRWxlbWVudCA9ICgpID0+IDxGcmFnbWVudD5cbiAgICAgIDxJb25pY29uIGNsYXNzTmFtZT1cImluZm8taWNvblwiXG4gICAgICAgICAgICAgICBpY29uPVwibWQtaW5mb3JtYXRpb24tY2lyY2xlXCJcbiAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMWVtXCJcbiAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICczcHgnLFxuICAgICAgICAgICAgICAgfX0vPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPnt0aGlzLnByb3BzLmNvdW50fTwvc3Bhbj5cbiAgICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCI+e2BcbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cblxuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJpc3N1ZXMtYmFkZ2VcIiB0aXRsZT17YCR7dGhpcy5wcm9wcy5jb3VudH0gb3BlbiBpc3N1ZXNgfT5cbiAgICAgICAgPFJlbmRlcklmRWxzZVxuICAgICAgICAgIHRlc3Q9e3RoaXMucHJvcHMuaHJlZn1cbiAgICAgICAgICBwYXNzPXsoKSA9PiA8TGluayBocmVmPXt0aGlzLnByb3BzLmhyZWZ9PjxhPjxFbGVtZW50Lz48L2E+PC9MaW5rPn1cbiAgICAgICAgICBmYWlsPXsoKSA9PiA8RnJhZ21lbnQ+PEVsZW1lbnQvPjwvRnJhZ21lbnQ+fS8+XG4gICAgICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCI+e2BcbiAgICAgICAgICAuaXNzdWVzLWJhZGdlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElzc3Vlc1xuIl19 */\n/*@ sourceURL=../../../src/components/gh/Issues.js */"}))}}_defineProperty(Issues,"propTypes",{count:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.number]),href:_propTypes.default.string});var _default=Issues;exports.default=_default;
//# sourceMappingURL=Issues.js.map