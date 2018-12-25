import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { join } from 'path'

import Issues from '../gh/Issues'
import Language from '../gh/Language'
import PullRequests from '../gh/PullRequests'
import ReadmeBadge from '../gh/ReadmeBadge'
import RenderIf from '../../renderprops/RenderIf'
import RepoTitle from './RepoCardTitle'

export class RepoCard extends Component {
  static propTypes = {
    badges: PropTypes.arrayOf(PropTypes.shape({src: PropTypes.string})),
    description: PropTypes.string,
    id: PropTypes.any,
    language: PropTypes.string,
    linkTo: PropTypes.string,
    openIssues: PropTypes.number,
    openIssuesHtmlUrl: PropTypes.string,
    openPullrequests: PropTypes.number,
    openPullrequestsHtmlUrl: PropTypes.string,
    ownerName: PropTypes.string,
    readmeHtml: PropTypes.string,
    repoName: PropTypes.string,
  }

  static defaultProps = {
    badges: [],
    className: '',
  }

  constructor (props) {
    super(props)
    this.details = React.createRef()
    this.goToDetails = this.goToDetails.bind(this)
  }

  goToDetails () {
    if (!this.props.linkTo) return
    window.location = this.details.current.getAttribute('href')
  }

  render () {
    return (
      <div id={this.props.id}
           className={`repo-card ${this.props.className}`}
           onDoubleClick={this.goToDetails}>
        <RepoTitle owner={this.props.ownerName}
                   repo={this.props.repoName}/>
        <div>{this.props.description}</div>
        <div className="github-badges">
          <RenderIf test={this.props.language} render={() =>
            <Language language={this.props.language}/>
          }/>
          <RenderIf test={this.props.openIssues !== undefined} render={() =>
            <Issues count={this.props.openIssues}/>
          }/>
          <RenderIf test={this.props.openPullrequests !== undefined} render={() =>
            <PullRequests count={this.props.openPullrequests}/>
          }/>
          <RenderIf test={!!this.props.readmeHtml} render={() => <ReadmeBadge/>}/>
        </div>
        <div className="readme-badges">
          {this.props.badges.map(el =>
            <img key={el.src} src={join('static', 'repos', el.src)}/>
          )}
        </div>
        <RenderIf test={!!this.props.linkTo} render={() =>
          <Link href={{pathname: '/repos', query: {id: this.props.linkTo}}}
                as={`/repos/${this.props.linkTo}`}>
            <a ref={this.details}>Details</a>
          </Link>
        }/>
        <style jsx="true">{`
        .github-badges > :global(*) {
          margin: 1px 8px 1px 0;
        }
      `}</style>
      </div>
    )
  }
}

export default RepoCard
