import Ionicon from 'react-ionicons'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Nav extends Component {

  static propTypes = {
    buildDate: PropTypes.string,
    styles: PropTypes.object,
    title: PropTypes.string,
  }

  constructor (props) {
    super(props)

    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      activeMenu: false
    }
  }

  toggleMenu (e) {
    console.log('toggle menu')
    e.preventDefault()
    this.setState({
      activeMenu: !this.state.activeMenu
    })
  }

  render () {
    return <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="/static/git-icon-black.svg" width="28" height="28"/>
            <h2 className="is-size-4">Repos</h2>
          </a>

          <a role="button" onClick={this.toggleMenu}
             className={`navbar-burger ${this.state.activeMenu ? 'is-active' : ''}`}
             aria-label="menu" aria-expanded={this.state.activeMenu ? 'true' : 'false'}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
          <div className="navbar-start">
          </div>
          <div className="navbar-end">
            <Link href="https://github.com/gaggle/repo-lister">
              <a className="navbar-item">
                <span className="icon"><Ionicon icon="logo-github"/></span>
                <span className="is-hidden-desktop">GitHub</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  }
}

export default Nav
