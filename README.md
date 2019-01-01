# repo-components [![Build Status](https://travis-ci.org/gaggle/repo-components.svg?branch=master)](https://travis-ci.org/gaggle/repo-components)
UI components for [repo-lister][repolister]. In principle these are standalone, project-agnostic React components.


## Development
* `npm test` for tests and coverage
* `npm run dev` will run a local Styleguidist server (and automatically rebuild when src changes)


## Cutting a new release
Run this command to automatically increment version, build, commit, tag, and push a new release:
```bash
npm run clean && npm test && npm version patch && npm run clean && (export VERSION=`node -p "require('./package.json').version"`; npm run build && git add ./build/ ./docs/ && git commit --amend --no-edit && git tag -fam $VERSION v$VERSION && git push && git push origin v$VERSION)
```

[repolister]: https://www.github.com/gaggle/repo-lister
