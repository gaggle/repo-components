import React from 'react'
import Ionicon from 'react-ionicons'

export default () =>
  <span className="readme-badge" title="Has README.md">
    <Ionicon
      className="book-icon"
      icon="md-book"
      fontSize="1em"
      style={{
        verticalAlign: 'middle',
        marginBottom: '4px',
      }}
    />
    <style jsx="true">{`
      .readme-badge {
        display: inline-block;
        white-space: nowrap;
      }
    `}</style>
  </span>
