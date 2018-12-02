import GithubColors from 'github-colors'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import capitalize from 'lodash/capitalize'

export default class Language extends Component {

  static propTypes = {
    language: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props)
    const lookup = GithubColors.get(props.language)
    if (!lookup) {
      console.warn(`Could not identify language '${props.language}', 
      available: ${Object.keys(GithubColors.colors)}`)
    }
    this.color = lookup ? lookup.color : undefined
    this.text = getLangText(lookup ? lookup.ace_mode : props.language)
  }

  render () {
    return (
      <span className="language-badge">
        <span style={{color: this.color}} className="color">●</span>
        <span className="text">{this.text}</span>
        <style jsx="true">{`
          .language-badge {
            display: inline-block;
            white-space: nowrap;
          }
          .color {
            padding-right: 2px;
          }
        `}</style>
      </span>
    )
  }
}

const LANG_TEXTS = {
  c_cpp: 'C++',
  csharp: 'C#',
  javascript: '.Js',
}

function getLangText (text) {
  return LANG_TEXTS[text] || capitalize(text)
}
