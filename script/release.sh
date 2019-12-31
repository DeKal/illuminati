set -e
../gradlew generateGitChangelogMinimal
git add ../CHANGELOG.md
git commit -m "Add CHANGELOG to new Release"
../gradlew release
