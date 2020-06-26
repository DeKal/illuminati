# Continuous Integration(CI)

CI is supported by **Circle.io**.\
Circle.io will start 2 workflow: (Looking at .circleci/config.yml for details)
1) Using *Danger JS* to Check Pull Request(PR) Qualification.
2) Using Gradle with openjdk 11 container to validate the PR.

## Danger JS
- Ensure that PR has all the description, tag, reviewers and assignees, which helps a lot to build a good habit for team.

## CodeCov
- Coverage Report will be updated from *Circle CI* and a associative app will report back on Github PR.
### CodeCov Patch
- Check if the coverage is affected by the new patch or not.

### CodeCov Project
- Check the coverage of the whole project is changed or not.