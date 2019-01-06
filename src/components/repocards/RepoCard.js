import Ionicon from 'react-ionicons'
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
    detailsLink: PropTypes.string,
    id: PropTypes.any,
    language: PropTypes.string,
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
    if (!this.props.detailsLink) return
    window.location = this.details.current.getAttribute('href')
  }

  render () {
    return (
      <div id={this.props.id}
           className={`card repo-card ${this.props.className}`}
           onDoubleClick={this.goToDetails}>
        <header className="card-header">
          <p className="card-header-title">
            <RepoTitle owner={this.props.ownerName}
                       repo={this.props.repoName}/>
          </p>
        </header>

        <div className="card-content">
          <div className="content">
            <div className="description has-text-black-ter">{this.props.description}</div>
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
            <RenderIf test={!!this.props.detailsLink} render={() =>
              <Link href={{pathname: '/repos', query: {id: this.props.detailsLink}}}
                    as={`/repos/${this.props.detailsLink}`}>
                <a ref={this.details}>Details</a>
              </Link>
            }/>
            <RenderIf test={!!this.props.externalLink} render={() =>
              <footer className="card-footer">
                <p className="card-footer-item is-pulled-right">
                  <a className="external-link"
                     title="Go to repo"
                     href={this.props.externalLink}
                     target="_blank">
                    <Ionicon className="icon link-icon" icon="md-link"/>
                  </a>
                </p>
              </footer>
            }/>
          </div>
        </div>
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
