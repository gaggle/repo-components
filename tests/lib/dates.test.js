import { getDatetime } from '../../src/lib/dates'

describe('getDatetime', () => {
  it('understands epoch', () => {
    const result = getDatetime(320371200000)
    expect(result.getTime()).toBe(320371200000)
  })

  it('understands epoch as string', () => {
    const result = getDatetime('320371200000')
    expect(result.getTime()).toBe(320371200000)
  })

  it('understands timestamp string', () => {
    const result = getDatetime('1980-02-26T12:30:00+01:00')
    expect(result.getTime()).toBe(320412600000)
  })

  it('throws error if string is invalid', () => {
    expect(() => getDatetime('not a date string'))
      .toThrow('Cannot create date from \'not a date string\'')
  })
})
