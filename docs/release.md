## Release
- Using Gradle release (`net.researchgate.release`).
- Only release a version when git status is clean and on branch `master`.
- Changelog is generated with Git Changelog Gradle plugin following `changelog.mustache` format.
```bash
./release.sh
```