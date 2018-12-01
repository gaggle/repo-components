import PropTypes from 'prop-types'
import React, { Component } from 'react'

import OptionalLink from '../links/OptionalLink'

class RepoCardTitle extends Component {

  static propTypes = {
    owner: PropTypes.string,
    owner_url: PropTypes.string,
    repo: PropTypes.string,
    repo_url: PropTypes.string,
  }

  render () {
    return <div>
      <OptionalLink href={this.props.owner_url}>
        {this.props.owner}
      </OptionalLink>
      {' / '}
      <OptionalLink href={this.props.repo_url}>
        {this.props.repo}
      </OptionalLink>
    </div>
  }
}

export default RepoCardTitle
