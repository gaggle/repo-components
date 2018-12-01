import { checkProptypes } from '../../src/lib/proptypes'
import PropTypes from 'prop-types'

describe('checkProptypes', () => {
  it('does nothing if the type of props matches the proptypes definition', () => {
    checkProptypes({count: PropTypes.number}, {count: 1}, 'foo')
  })

  it('throws an error if the type of props does not match proptypes definition', () => {
    expect(() => {
      checkProptypes({count: PropTypes.number}, {count: 'str'}, 'foo')
    }).toThrow()
  })
})
