import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import { withRouter } from 'next/router'

const ActiveLink = ({children, href, router, ...props}) => {
  const isActive = router ? router.pathname === href : false
  const classes = `nav-link${isActive ? ' active' : ''}`

  return <Link href={href} {...props}>
    <a className={classes}>{children}</a>
  </Link>
}

ActiveLink.propTypes = {router: PropTypes.object}

export default withRouter(ActiveLink)
