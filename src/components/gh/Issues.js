import Ionicon from 'react-ionicons'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import RenderIfElse from '../../renderprops/RenderIfElse'

class Issues extends Component {
  static propTypes = {
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    href: PropTypes.string,
  }

  render () {
    const Element = () => <Fragment>
      <Ionicon className="info-icon"
               icon="md-information-circle"
               fontSize="1em"
               style={{
                 verticalAlign: 'middle',
                 marginBottom: '3px',
               }}/>
      <span className="text">{this.props.count}</span>
      <style jsx="true">{`
        .text {
          padding-left: 2px;
        }
      `}</style>
    </Fragment>

    return (
      <span className="issues-badge">
        <RenderIfElse
          test={this.props.href}
          pass={() => <Link href={this.props.href}><a><Element/></a></Link>}
          fail={() => <Fragment><Element/></Fragment>}/>
        <style jsx="true">{`
          .issues-badge {
            display: inline-block;
            white-space: nowrap;
          }
        `}</style>
      </span>
    )
  }
}

export default Issues
