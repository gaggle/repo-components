import RenderIfElse from '../renderprops/RenderIfElse'
import React, { Component, Fragment } from 'react'
import Timestamp from './Timestamp'
import Link from 'next/link'
import PropTypes from 'prop-types'

const NextLink = () =>
  <Link href="https://github.com/zeit/next.js">
    <a className="text-muted font-weight-bold">Next.js</a>
  </Link>

class BuildBlurb extends Component {
  static propTypes = {
    buildDate: PropTypes.string,
  }

  render () {
    return <RenderIfElse
      test={this.props.buildDate}
      pass={() => <Fragment>
        {'Updated '}
        <Timestamp className="font-weight-bold"
                   startDate={this.props.buildDate}>
        </Timestamp>
        , built with <NextLink/>.
      </Fragment>}
      fail={() => <Fragment>
        Built with <NextLink/>.
      </Fragment>}
    />
  }
}

export default BuildBlurb
