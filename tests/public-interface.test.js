import objectPath from 'object-path'
import src from '../src'

const componentNames = [
  'misc.Timestamp',
  'page.Layout',
  'page.Loading',
  'page.Masonry',
  'renderprops.RenderIf',
  'renderprops.RenderIfElse',
  'repocards.RepoCard',
]

describe('Root interface', () => {
  const test_default_import = (e) =>
    it(`exposes ${e} via default import`, () =>
      expect(objectPath.get(src, e)).toBeDefined())

  for (const e of componentNames) test_default_import(e)
})
