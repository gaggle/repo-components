"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.RepoCard=void 0;var _style=_interopRequireDefault(require("styled-jsx/style"));var _link=_interopRequireDefault(require("next/link"));var _propTypes=_interopRequireDefault(require("prop-types"));var _react=_interopRequireWildcard(require("react"));var _path=require("path");var _Issues=_interopRequireDefault(require("../gh/Issues"));var _Language=_interopRequireDefault(require("../gh/Language"));var _PullRequests=_interopRequireDefault(require("../gh/PullRequests"));var _ReadmeBadge=_interopRequireDefault(require("../gh/ReadmeBadge"));var _RenderIf=_interopRequireDefault(require("../../renderprops/RenderIf"));var _RepoCardTitle=_interopRequireDefault(require("./RepoCardTitle"));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;return newObj}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}class RepoCard extends _react.Component{constructor(props){super(props);this.details=_react.default.createRef();this.goToDetails=this.goToDetails.bind(this)}goToDetails(){window.location=this.details.current.getAttribute("href")}render(){return _react.default.createElement("div",{id:this.props.id,onDoubleClick:this.goToDetails,className:"jsx-2370723605"+" "+`repo-card ${this.props.className}`},_react.default.createElement(_RepoCardTitle.default,{owner:this.props.owner_name,repo:this.props.repo_name}),_react.default.createElement("div",{className:"jsx-2370723605"},this.props.description),_react.default.createElement("div",{className:"jsx-2370723605"+" "+"github-badges"},_react.default.createElement(_RenderIf.default,{test:this.props.language,render:()=>_react.default.createElement(_Language.default,{language:this.props.language})}),_react.default.createElement(_RenderIf.default,{test:this.props.open_issues!==undefined,render:()=>_react.default.createElement(_Issues.default,{count:this.props.open_issues})}),_react.default.createElement(_RenderIf.default,{test:this.props.open_pullrequests!==undefined,render:()=>_react.default.createElement(_PullRequests.default,{count:this.props.open_pullrequests})}),_react.default.createElement(_RenderIf.default,{test:!!this.props.readme_html,render:()=>_react.default.createElement(_ReadmeBadge.default,null)})),_react.default.createElement("div",{className:"jsx-2370723605"+" "+"readme-badges"},this.props.badges.map(el=>_react.default.createElement("img",{key:el.src,src:(0,_path.join)("static","repos",el.src),className:"jsx-2370723605"}))),_react.default.createElement(_link.default,{href:{pathname:"/repos",query:{id:this.props.id}},as:`/repos/${this.props.id}`},_react.default.createElement("a",{ref:this.details,className:"jsx-2370723605"},"Details")),_react.default.createElement(_style.default,{styleId:"2370723605",css:".github-badges.jsx-2370723605>*{margin:1px 8px 1px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9jYXJkcy9SZXBvQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRTJCLEFBR2dDLHFCQUN2QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9yZXBvY2FyZHMvUmVwb0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcblxuaW1wb3J0IElzc3VlcyBmcm9tICcuLi9naC9Jc3N1ZXMnXG5pbXBvcnQgTGFuZ3VhZ2UgZnJvbSAnLi4vZ2gvTGFuZ3VhZ2UnXG5pbXBvcnQgUHVsbFJlcXVlc3RzIGZyb20gJy4uL2doL1B1bGxSZXF1ZXN0cydcbmltcG9ydCBSZWFkbWVCYWRnZSBmcm9tICcuLi9naC9SZWFkbWVCYWRnZSdcbmltcG9ydCBSZW5kZXJJZiBmcm9tICcuLi8uLi9yZW5kZXJwcm9wcy9SZW5kZXJJZidcbmltcG9ydCBSZXBvVGl0bGUgZnJvbSAnLi9SZXBvQ2FyZFRpdGxlJ1xuXG5leHBvcnQgY2xhc3MgUmVwb0NhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGJhZGdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5hbnksXG4gICAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3Blbl9pc3N1ZXM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3Blbl9pc3N1ZXNfaHRtbF91cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3Blbl9wdWxscmVxdWVzdHM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3Blbl9wdWxscmVxdWVzdHNfaHRtbF91cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3duZXJfbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZWFkbWVfaHRtbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZXBvX25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGJhZGdlczogW10sXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuZGV0YWlscyA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5nb1RvRGV0YWlscyA9IHRoaXMuZ29Ub0RldGFpbHMuYmluZCh0aGlzKVxuICB9XG5cbiAgZ29Ub0RldGFpbHMgKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuZGV0YWlscy5jdXJyZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICBjbGFzc05hbWU9e2ByZXBvLWNhcmQgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gfVxuICAgICAgICBvbkRvdWJsZUNsaWNrPXt0aGlzLmdvVG9EZXRhaWxzfVxuICAgICAgPlxuICAgICAgICA8UmVwb1RpdGxlIG93bmVyPXt0aGlzLnByb3BzLm93bmVyX25hbWV9XG4gICAgICAgICAgICAgICAgICAgcmVwbz17dGhpcy5wcm9wcy5yZXBvX25hbWV9Lz5cbiAgICAgICAgPGRpdj57dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnaXRodWItYmFkZ2VzXCI+XG4gICAgICAgICAgPFJlbmRlcklmIHRlc3Q9e3RoaXMucHJvcHMubGFuZ3VhZ2V9IHJlbmRlcj17KCkgPT5cbiAgICAgICAgICAgIDxMYW5ndWFnZSBsYW5ndWFnZT17dGhpcy5wcm9wcy5sYW5ndWFnZX0vPlxuICAgICAgICAgIH0vPlxuICAgICAgICAgIDxSZW5kZXJJZiB0ZXN0PXt0aGlzLnByb3BzLm9wZW5faXNzdWVzICE9PSB1bmRlZmluZWR9IHJlbmRlcj17KCkgPT5cbiAgICAgICAgICAgIDxJc3N1ZXMgY291bnQ9e3RoaXMucHJvcHMub3Blbl9pc3N1ZXN9Lz5cbiAgICAgICAgICB9Lz5cbiAgICAgICAgICA8UmVuZGVySWYgdGVzdD17dGhpcy5wcm9wcy5vcGVuX3B1bGxyZXF1ZXN0cyAhPT0gdW5kZWZpbmVkfSByZW5kZXI9eygpID0+XG4gICAgICAgICAgICA8UHVsbFJlcXVlc3RzIGNvdW50PXt0aGlzLnByb3BzLm9wZW5fcHVsbHJlcXVlc3RzfS8+XG4gICAgICAgICAgfS8+XG4gICAgICAgICAgPFJlbmRlcklmIHRlc3Q9eyEhdGhpcy5wcm9wcy5yZWFkbWVfaHRtbH0gcmVuZGVyPXsoKSA9PiA8UmVhZG1lQmFkZ2UvPn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkbWUtYmFkZ2VzXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuYmFkZ2VzLm1hcChlbCA9PlxuICAgICAgICAgICAgPGltZyBrZXk9e2VsLnNyY30gc3JjPXtqb2luKCdzdGF0aWMnLCAncmVwb3MnLCBlbC5zcmMpfS8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9e3twYXRobmFtZTogJy9yZXBvcycsIHF1ZXJ5OiB7aWQ6IHRoaXMucHJvcHMuaWR9fX1cbiAgICAgICAgICAgICAgYXM9e2AvcmVwb3MvJHt0aGlzLnByb3BzLmlkfWB9PlxuICAgICAgICAgIDxhIHJlZj17dGhpcy5kZXRhaWxzfT5cbiAgICAgICAgICAgIERldGFpbHNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD1cInRydWVcIj57YFxuICAgICAgICAuZ2l0aHViLWJhZGdlcyA+IDpnbG9iYWwoKikge1xuICAgICAgICAgIG1hcmdpbjogMXB4IDhweCAxcHggMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9DYXJkXG4iXX0= */\n/*@ sourceURL=../../../src/components/repocards/RepoCard.js */"}))}}exports.RepoCard=RepoCard;_defineProperty(RepoCard,"propTypes",{badges:_propTypes.default.arrayOf(_propTypes.default.shape({})),description:_propTypes.default.string,id:_propTypes.default.any,language:_propTypes.default.string,open_issues:_propTypes.default.number,open_issues_html_url:_propTypes.default.string,open_pullrequests:_propTypes.default.number,open_pullrequests_html_url:_propTypes.default.string,owner_name:_propTypes.default.string,readme_html:_propTypes.default.string,repo_name:_propTypes.default.string});_defineProperty(RepoCard,"defaultProps",{badges:[],className:""});var _default=RepoCard;exports.default=_default;
//# sourceMappingURL=RepoCard.js.map