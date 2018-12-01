import PropTypes from 'prop-types'
import React, { Component } from 'react'

class RenderIfElse extends Component {
  static propTypes = {
    fail: PropTypes.func,
    pass: PropTypes.func,
    test: PropTypes.any,
  }

  static defaultProps = {
    fail: () => null,
    pass: () => null,
  }

  render () {
    const val = this.props.test instanceof Function ? this.props.test() : this.props.test
    return val ? this.props.pass() : this.props.fail()
  }
}

export default RenderIfElse
