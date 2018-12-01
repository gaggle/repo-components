import PropTypes from 'prop-types'

export function checkProptypes (propTypes, props, componentName) {
  const t = console.error
  try {
    console.error = msg => {throw new Error(msg)}
    PropTypes.checkPropTypes(propTypes, props, 'prop', componentName)
  } finally {
    console.error = t
  }
}
