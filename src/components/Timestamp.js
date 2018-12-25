import distanceInWords from 'date-fns/distance_in_words'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { getDatetime } from '../lib/dates'

/**
 * Nice human-readable timestamp
 *
 * Time is shown relative if possible,
 * and automatically updates as that time recedes into the past.
 * `startDate` can be epoch or any date-string understood by Javascript `Date` class
 * (e.g. `1980-02-26T12:30:00+01:00`)
 */
class Timestamp extends Component {
  static pooledElements = []
  static pooledInterval = 1000
  static pooledTimer = null

  static propTypes = {
    className: PropTypes.string,
    formatStr: PropTypes.string,
    onChange: PropTypes.func,
    startDate: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]),
  }

  static defaultProps = {
    formatStr: 'MMMM Do YYYY, HH:mm:ss',
    onChange: () => {},
    startDate: new Date(),
  }

  constructor (props) {
    super(props)

    this.state = {
      content: '',
      start: getDatetime(props.startDate),
    }
  }

  componentWillMount () {
    if (this.state.start === undefined) {
      this.state.start = new Date()
    }
    this.update()
  }

  componentWillReceiveProps () {
    this.update()
  }

  componentWillUnmount () {
    removePooledElement(this)
  }

  componentDidMount () {
    ensurePooledTimer(this.pooledInterval)
    pushPooledElement(this)
  }

  /**
   * Update this.state.content
   */
  update () {
    const newContent = distanceInWords(
      new Date(),
      this.state.start,
      {addSuffix: true, includeSeconds: true}
    )
    if (newContent !== this.state.content) {
      this.setState({content: newContent}, () => {
        this.props.onChange(newContent)
      })
    }
  }

  render () {
    return (
      <span className={this.props.className}
            title={format(this.state.start, this.props.formatStr)}
            data-datetime={format(this.state.start)}
            data-dateepoch={this.state.start.getTime()}>
        {this.state.content}
      </span>
    )
  }
}

export function clearPooledTimer () {
  if (!Timestamp.pooledTimer) return

  clearInterval(Timestamp.pooledTimer)
  Timestamp.pooledTimer = null
  Timestamp.pooledElements = []
}

function ensurePooledTimer (interval) {
  if (Timestamp.pooledTimer) return

  Timestamp.pooledTimer = setInterval(() => {
    Timestamp.pooledElements.forEach(element => {
      element.update()
    })
  }, interval)
}

function pushPooledElement (element) {
  if (!(element instanceof Timestamp)) {
    throw new Error('Element not an instance of Timestamp')
  }
  if (Timestamp.pooledElements.indexOf(element) === -1) {
    Timestamp.pooledElements.push(element)
  }
}

function removePooledElement (element) {
  if (!(element instanceof Timestamp)) {
    throw new Error('Element not an instance of Timestamp')
  }
  const index = Timestamp.pooledElements.indexOf(element)
  if (index !== -1) {
    Timestamp.pooledElements.splice(index, 1)
  }
}

export default Timestamp
