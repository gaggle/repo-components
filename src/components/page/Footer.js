import PropTypes from 'prop-types'
import React, { Component } from 'react'

import BuildBlurb from '../BuildBlurb'

class Footer extends Component {

  static propTypes = {
    buildDate: PropTypes.string,
  }

  render () {
    return <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <BuildBlurb buildDate={this.props.buildDate}/>
        </p>
      </div>
    </footer>
  }
}

export default Footer
