import Masonry from 'react-masonry-component'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Loading from '../page/Loading'
import RenderIfElse from '../../renderprops/RenderIfElse'
import RepoCard from './RepoCard'

const masonryOptions = {
  itemSelector: '.grid-item',
  transitionDuration: 0,
}

class RepoCards extends Component {
  static propTypes = {
    data: PropTypes.objectOf(PropTypes.shape({
      badges: PropTypes.arrayOf(PropTypes.shape({})),
      description: PropTypes.string, // null
      full_name: PropTypes.string, // "gaggle/FirebaseExperiment"
      id: PropTypes.string, // "gaggle/FirebaseExperiment"
      language: PropTypes.string, // "JavaScript"
      open_issues: PropTypes.number, // 0
      open_issues_html_url: PropTypes.string, // "https://github.com/gaggle/FirebaseExperiment/issues"
      open_pullrequests: PropTypes.number, // 0
      open_pullrequests_html_url: PropTypes.string, // "https://github.com/gaggle/FirebaseExperiment/pulls"
      owner_html_url: PropTypes.string, // "https://github.com/gaggle"
      owner_name: PropTypes.string, // "gaggle"
      readme_html: PropTypes.string,
      repo_html_url: PropTypes.string, // "https://github.com/gaggle/FirebaseExperiment"
      repo_name: PropTypes.string, // "FirebaseExperiment"
    })),
  }

  static defaultProps = {
    data: {},
  }

  componentDidUpdate () {
    PropTypes.checkPropTypes(RepoCard.propTypes, this.props, 'prop', 'RepoCards')
  }

  render () {
    const length = Object.keys(this.props.data).length
    return <RenderIfElse
      test={!!length}
      pass={() => <div className="repo-cards section">
        <div className="container">
          <Masonry className={'grid columns is-gapless'}
                   options={masonryOptions}>
            {Object.entries(this.props.data).map(([key, value], index) =>
              <div key={key} id={key}
                   className="grid-item column is-3-fullhd is-4-desktop is-6-tablet is-12-mobile"
                   data-index={index}>
                <RepoCard {...value}/>
              </div>)}
          </Masonry>
        </div>
      </div>}
      fail={() => <Loading/>}/>
  }
}

export default RepoCards
