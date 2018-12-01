import PropTypes from 'prop-types'
import React, { Component } from 'react'

class RenderIf extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    test: PropTypes.any,
  }

  static defaultProps = {
    render: () => {},
  }

  render () {
    const val = this.props.test instanceof Function ? this.props.test() : this.props.test
    return val ? this.props.render() : null
  }
}

export default RenderIf
