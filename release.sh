set -e
./gradlew generateGitChangelogMinimal
git add CHANGELOG.md
git commit -m "Add CHANGELOG to new Release"
git push origin master
./gradlew release
