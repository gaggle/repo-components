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
    badges: PropTypes.arrayOf(PropTypes.shape({})),
    description: PropTypes.string,
    id: PropTypes.any,
    language: PropTypes.string,
    open_issues: PropTypes.number,
    open_issues_html_url: PropTypes.string,
    open_pullrequests: PropTypes.number,
    open_pullrequests_html_url: PropTypes.string,
    owner_name: PropTypes.string,
    readme_html: PropTypes.string,
    repo_name: PropTypes.string,
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
    window.location = this.details.current.getAttribute('href')
  }

  render () {
    return (
      <div
        id={this.props.id}
        className={`repo-card ${this.props.className}`}
        onDoubleClick={this.goToDetails}
      >
        <RepoTitle owner={this.props.owner_name}
                   repo={this.props.repo_name}/>
        <div>{this.props.description}</div>
        <div className="github-badges">
          <RenderIf test={this.props.language} render={() =>
            <Language language={this.props.language}/>
          }/>
          <RenderIf test={this.props.open_issues !== undefined} render={() =>
            <Issues count={this.props.open_issues}/>
          }/>
          <RenderIf test={this.props.open_pullrequests !== undefined} render={() =>
            <PullRequests count={this.props.open_pullrequests}/>
          }/>
          <RenderIf test={!!this.props.readme_html} render={() => <ReadmeBadge/>}/>
        </div>
        <div className="readme-badges">
          {this.props.badges.map(el =>
            <img key={el.src} src={join('static', 'repos', el.src)}/>
          )}
        </div>
        <Link href={{pathname: '/repos', query: {id: this.props.id}}}
              as={`/repos/${this.props.id}`}>
          <a ref={this.details}>
            Details
          </a>
        </Link>
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
