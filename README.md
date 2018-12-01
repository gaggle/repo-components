# repo-components
UI components for [repo-lister][repolister] project. 

## Development

* `npm test` to run tests and generate coverage
* `npm run styleguide` to run local Styleguidist
* `npm run build` to generate final release artifacts (`/build` and `styleguide` folders) 


## Cutting a new release

Run this command to increment version, and build, commit, tag, and push a new release:

```bash
npm version patch && (export VERSION=`node -p "require('./package.json').version"`; npm run build && git add ./build/ ./docs/ && git commit --amend --no-edit && git tag -fam $VERSION v$VERSION && git push && git push origin v$VERSION)
```

[repolister]: https://www.github.com/gaggle/repo-lister
