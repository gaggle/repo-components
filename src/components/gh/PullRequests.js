import Ionicon from 'react-ionicons'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import RenderIfElse from '../../renderprops/RenderIfElse'

class PullRequests extends Component {
  static propTypes = {
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    href: PropTypes.string,
  }

  render () {
    const Element = () => <Fragment>
      <Ionicon className="pr-icon"
               icon="md-git-pull-request"
               fontSize="0.95em"
               style={{
                 verticalAlign: 'middle',
                 marginBottom: '4px',
               }}/>
      <span className="text">{this.props.count}</span>
      <style jsx="true">{`
        .text {
          padding-left: 2px;
        }
      `}</style>
    </Fragment>

    return (
      <span className="pr-badge">
        <RenderIfElse
          test={this.props.href}
          pass={() => <Link href={this.props.href}><a><Element/></a></Link>}
          fail={() => <Fragment><Element/></Fragment>}/>
        <style jsx="true">{`
          .pr-badge {
            display: inline-block;
            white-space: nowrap;
          }
        `}</style>
      </span>
    )
  }
}

export default PullRequests
