# repo-components
UI components for [repo-lister][repolister] project. 


## Development
* `npm test` for tests and coverage
* `npm run dev` will watch src files to generate artifacts and run local Styleguidist server


## Cutting a new release
Run this command to automatically increment version, build, commit, tag, and push a new release:
```bash
npm test && npm version patch && npm run clean && (export VERSION=`node -p "require('./package.json').version"`; npm run build && git add ./build/ ./docs/ && git commit --amend --no-edit && git tag -fam $VERSION v$VERSION && git push && git push origin v$VERSION)
```


[repolister]: https://www.github.com/gaggle/repo-lister
