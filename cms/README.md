# Illuminati CMS

[![Build Status](https://scrutinizer-ci.com/g/DeKal/illuminati/badges/build.png?b=master)](https://scrutinizer-ci.com/g/DeKal/illuminati/build-status/master)[![Code Coverage](https://scrutinizer-ci.com/g/DeKal/illuminati/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/DeKal/illuminati/?branch=master)

This is the cms part of Illuminati. The project will be built and included in illuminati application.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and can be developed locally without launching the full Spring MVC Application.

# Contributing
## Pull Request / Commit / Branch rule
- We should create an issue before starting to code anything.
- Checkout to master, make sure fetching latest code change, then create a new branch `cms/new_branch_name`. The branch name should start with `cms/` prefix, to differentiate branch between `illuminati` and `cms`.
- The commit should start with `[#CODE] This is new commit`. With the `CODE` is the number getting from an issue. In case, there's an urgent issue, please at least put the commit with `Hot-fix` tag: `[Hot-fix] This is a hot fix commit`.
- `Pull Request` should be created as soon as we can, so we can make sure there is nothing broken between pushs. `PR title` should start with a tag `[#CODE] My PR` so that we know what is the issue the `PR` is related to. 
- When creating a `PR`, make sure to fill in `title, description, reviewers, assignees(yourself), and labels`. These attributes are compulsory, and DangerBot will raise an error when one of these are missed.

## CI / CD
This project is under sub folder of `illuminati`, so make sure to check only these following CI/CD tools.If one of them failed, make sure to resolve an issue before merging the code.
- **Danger**: This to check the PR info.
- **Scrutinizer**: This to check the code coverage.
- **CircleCi/build**: This to check and running test cases.
- **Heroku**: This will auto-deploy the branch to a new instance. Heroku will not deploy when there is an error in these CI/CD tools.

# Development
In the project directory, you can run:

## `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## `yarn test`

Launches the test runner in the interactive watch mode. We must check our implementation before pushing any commits to the github branch. `Circle CI` will make sure the new feature code isn't broken by running this whenever there is the push to git. So be careful, if you don't want to see the red colors on your PR.

## `yarn test:coverage`

Launches the test runner in coverage mode, which can help us to calculate the whole coverage of the project. We aim to keep the coverage at 100%. With those boilerplate code or untestable code, we'll ignore it by configuring `coveragePathIgnorePatterns` inside `package.json`.

## `yarn lint`

For standardizing the JS code, we currently follow the convention of Prettier. And the whole project is configurating for VSCode. Make sure to run this before pushing to the branch to check if is there any thing wrong with the code style. We can search for plugins: Prettier or Eslint for more support.


## `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


