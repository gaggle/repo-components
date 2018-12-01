import Head from 'next/head'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import Footer from './Footer'
import Nav from './Nav'

class Layout extends Component {

  static propTypes = {
    buildDate: PropTypes.string,
    title: PropTypes.string,
  }

  render () {
    return <Fragment>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{this.props.title || ''}</title>
      </Head>
      <Nav/>
      {this.props.children}
      <Footer buildDate={this.props.buildDate}/>
    </Fragment>
  }
}

export default Layout
