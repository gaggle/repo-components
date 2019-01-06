"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.RepoCard=void 0;var _style=_interopRequireDefault(require("styled-jsx/style"));var _reactIonicons=_interopRequireDefault(require("react-ionicons"));var _link=_interopRequireDefault(require("next/link"));var _propTypes=_interopRequireDefault(require("prop-types"));var _react=_interopRequireWildcard(require("react"));var _path=require("path");var _Issues=_interopRequireDefault(require("../gh/Issues"));var _Language=_interopRequireDefault(require("../gh/Language"));var _PullRequests=_interopRequireDefault(require("../gh/PullRequests"));var _ReadmeBadge=_interopRequireDefault(require("../gh/ReadmeBadge"));var _RenderIf=_interopRequireDefault(require("../../renderprops/RenderIf"));var _RepoCardTitle=_interopRequireDefault(require("./RepoCardTitle"));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;return newObj}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}class RepoCard extends _react.Component{constructor(props){super(props);this.details=_react.default.createRef();this.goToDetails=this.goToDetails.bind(this)}goToDetails(){if(!this.props.detailsLink)return;window.location=this.details.current.getAttribute("href")}render(){return _react.default.createElement("div",{id:this.props.id,onDoubleClick:this.goToDetails,className:"jsx-2370723605"+" "+`card repo-card ${this.props.className}`},_react.default.createElement("header",{className:"jsx-2370723605"+" "+"card-header"},_react.default.createElement("p",{className:"jsx-2370723605"+" "+"card-header-title"},_react.default.createElement(_RepoCardTitle.default,{owner:this.props.ownerName,repo:this.props.repoName}))),_react.default.createElement("div",{className:"jsx-2370723605"+" "+"card-content"},_react.default.createElement("div",{className:"jsx-2370723605"+" "+"content"},_react.default.createElement("div",{className:"jsx-2370723605"+" "+"description has-text-black-ter"},this.props.description),_react.default.createElement("div",{className:"jsx-2370723605"+" "+"github-badges"},_react.default.createElement(_RenderIf.default,{test:this.props.language,render:()=>_react.default.createElement(_Language.default,{language:this.props.language})}),_react.default.createElement(_RenderIf.default,{test:this.props.openIssues!==undefined,render:()=>_react.default.createElement(_Issues.default,{count:this.props.openIssues})}),_react.default.createElement(_RenderIf.default,{test:this.props.openPullrequests!==undefined,render:()=>_react.default.createElement(_PullRequests.default,{count:this.props.openPullrequests})}),_react.default.createElement(_RenderIf.default,{test:!!this.props.readmeHtml,render:()=>_react.default.createElement(_ReadmeBadge.default,null)})),_react.default.createElement("div",{className:"jsx-2370723605"+" "+"readme-badges"},this.props.badges.map(el=>_react.default.createElement("img",{key:el.src,src:(0,_path.join)("static","repos",el.src),className:"jsx-2370723605"}))),_react.default.createElement(_RenderIf.default,{test:!!this.props.detailsLink,render:()=>_react.default.createElement(_link.default,{href:{pathname:"/repos",query:{id:this.props.detailsLink}},as:`/repos/${this.props.detailsLink}`},_react.default.createElement("a",{ref:this.details,className:"jsx-2370723605"},"Details"))}),_react.default.createElement(_RenderIf.default,{test:!!this.props.externalLink,render:()=>_react.default.createElement("footer",{className:"jsx-2370723605"+" "+"card-footer"},_react.default.createElement("p",{className:"jsx-2370723605"+" "+"card-footer-item is-pulled-right"},_react.default.createElement("a",{title:"Go to repo",href:this.props.externalLink,target:"_blank",className:"jsx-2370723605"+" "+"external-link"},_react.default.createElement(_reactIonicons.default,{className:"icon link-icon",icon:"md-link"}))))}))),_react.default.createElement(_style.default,{styleId:"2370723605",css:".github-badges.jsx-2370723605>*{margin:1px 8px 1px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9jYXJkcy9SZXBvQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRzJCLEFBR2dDLHFCQUN2QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9yZXBvY2FyZHMvUmVwb0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW9uaWNvbiBmcm9tICdyZWFjdC1pb25pY29ucydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgSXNzdWVzIGZyb20gJy4uL2doL0lzc3VlcydcbmltcG9ydCBMYW5ndWFnZSBmcm9tICcuLi9naC9MYW5ndWFnZSdcbmltcG9ydCBQdWxsUmVxdWVzdHMgZnJvbSAnLi4vZ2gvUHVsbFJlcXVlc3RzJ1xuaW1wb3J0IFJlYWRtZUJhZGdlIGZyb20gJy4uL2doL1JlYWRtZUJhZGdlJ1xuaW1wb3J0IFJlbmRlcklmIGZyb20gJy4uLy4uL3JlbmRlcnByb3BzL1JlbmRlcklmJ1xuaW1wb3J0IFJlcG9UaXRsZSBmcm9tICcuL1JlcG9DYXJkVGl0bGUnXG5cbmV4cG9ydCBjbGFzcyBSZXBvQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYmFkZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe3NyYzogUHJvcFR5cGVzLnN0cmluZ30pKSxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZXRhaWxzTGluazogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLmFueSxcbiAgICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcGVuSXNzdWVzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9wZW5Jc3N1ZXNIdG1sVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9wZW5QdWxscmVxdWVzdHM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3BlblB1bGxyZXF1ZXN0c0h0bWxVcmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3duZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlYWRtZUh0bWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVwb05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGJhZGdlczogW10sXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuZGV0YWlscyA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5nb1RvRGV0YWlscyA9IHRoaXMuZ29Ub0RldGFpbHMuYmluZCh0aGlzKVxuICB9XG5cbiAgZ29Ub0RldGFpbHMgKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5kZXRhaWxzTGluaykgcmV0dXJuXG4gICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5kZXRhaWxzLmN1cnJlbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgIGNsYXNzTmFtZT17YGNhcmQgcmVwby1jYXJkICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YH1cbiAgICAgICAgICAgb25Eb3VibGVDbGljaz17dGhpcy5nb1RvRGV0YWlsc30+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgPFJlcG9UaXRsZSBvd25lcj17dGhpcy5wcm9wcy5vd25lck5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgIHJlcG89e3RoaXMucHJvcHMucmVwb05hbWV9Lz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uIGhhcy10ZXh0LWJsYWNrLXRlclwiPnt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnaXRodWItYmFkZ2VzXCI+XG4gICAgICAgICAgICAgIDxSZW5kZXJJZiB0ZXN0PXt0aGlzLnByb3BzLmxhbmd1YWdlfSByZW5kZXI9eygpID0+XG4gICAgICAgICAgICAgICAgPExhbmd1YWdlIGxhbmd1YWdlPXt0aGlzLnByb3BzLmxhbmd1YWdlfS8+XG4gICAgICAgICAgICAgIH0vPlxuICAgICAgICAgICAgICA8UmVuZGVySWYgdGVzdD17dGhpcy5wcm9wcy5vcGVuSXNzdWVzICE9PSB1bmRlZmluZWR9IHJlbmRlcj17KCkgPT5cbiAgICAgICAgICAgICAgICA8SXNzdWVzIGNvdW50PXt0aGlzLnByb3BzLm9wZW5Jc3N1ZXN9Lz5cbiAgICAgICAgICAgICAgfS8+XG4gICAgICAgICAgICAgIDxSZW5kZXJJZiB0ZXN0PXt0aGlzLnByb3BzLm9wZW5QdWxscmVxdWVzdHMgIT09IHVuZGVmaW5lZH0gcmVuZGVyPXsoKSA9PlxuICAgICAgICAgICAgICAgIDxQdWxsUmVxdWVzdHMgY291bnQ9e3RoaXMucHJvcHMub3BlblB1bGxyZXF1ZXN0c30vPlxuICAgICAgICAgICAgICB9Lz5cbiAgICAgICAgICAgICAgPFJlbmRlcklmIHRlc3Q9eyEhdGhpcy5wcm9wcy5yZWFkbWVIdG1sfSByZW5kZXI9eygpID0+IDxSZWFkbWVCYWRnZS8+fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZG1lLWJhZGdlc1wiPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5iYWRnZXMubWFwKGVsID0+XG4gICAgICAgICAgICAgICAgPGltZyBrZXk9e2VsLnNyY30gc3JjPXtqb2luKCdzdGF0aWMnLCAncmVwb3MnLCBlbC5zcmMpfS8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxSZW5kZXJJZiB0ZXN0PXshIXRoaXMucHJvcHMuZGV0YWlsc0xpbmt9IHJlbmRlcj17KCkgPT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17e3BhdGhuYW1lOiAnL3JlcG9zJywgcXVlcnk6IHtpZDogdGhpcy5wcm9wcy5kZXRhaWxzTGlua319fVxuICAgICAgICAgICAgICAgICAgICBhcz17YC9yZXBvcy8ke3RoaXMucHJvcHMuZGV0YWlsc0xpbmt9YH0+XG4gICAgICAgICAgICAgICAgPGEgcmVmPXt0aGlzLmRldGFpbHN9PkRldGFpbHM8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIH0vPlxuICAgICAgICAgICAgPFJlbmRlcklmIHRlc3Q9eyEhdGhpcy5wcm9wcy5leHRlcm5hbExpbmt9IHJlbmRlcj17KCkgPT5cbiAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyLWl0ZW0gaXMtcHVsbGVkLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiR28gdG8gcmVwb1wiXG4gICAgICAgICAgICAgICAgICAgICBocmVmPXt0aGlzLnByb3BzLmV4dGVybmFsTGlua31cbiAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICA8SW9uaWNvbiBjbGFzc05hbWU9XCJpY29uIGxpbmstaWNvblwiIGljb249XCJtZC1saW5rXCIvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICB9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCI+e2BcbiAgICAgICAgLmdpdGh1Yi1iYWRnZXMgPiA6Z2xvYmFsKCopIHtcbiAgICAgICAgICBtYXJnaW46IDFweCA4cHggMXB4IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXBvQ2FyZFxuIl19 */\n/*@ sourceURL=../../../src/components/repocards/RepoCard.js */"}))}}exports.RepoCard=RepoCard;_defineProperty(RepoCard,"propTypes",{badges:_propTypes.default.arrayOf(_propTypes.default.shape({src:_propTypes.default.string})),description:_propTypes.default.string,detailsLink:_propTypes.default.string,id:_propTypes.default.any,language:_propTypes.default.string,openIssues:_propTypes.default.number,openIssuesHtmlUrl:_propTypes.default.string,openPullrequests:_propTypes.default.number,openPullrequestsHtmlUrl:_propTypes.default.string,ownerName:_propTypes.default.string,readmeHtml:_propTypes.default.string,repoName:_propTypes.default.string});_defineProperty(RepoCard,"defaultProps",{badges:[],className:""});var _default=RepoCard;exports.default=_default;
//# sourceMappingURL=RepoCard.js.map