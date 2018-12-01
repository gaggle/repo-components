import Link from 'next/link'
import React from 'react'

import RenderIfElse from '../../renderprops/RenderIfElse'

const OptionalLink = ({href, ...props}) => {
  return <RenderIfElse
    test={href}
    pass={() => <Link href={href} {...props}><a>{props.children}</a></Link>}
    fail={() => <span {...props}>{props.children}</span>}
  />
}

export default OptionalLink
