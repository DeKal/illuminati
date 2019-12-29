"use strict";

var _danger = require("danger");

if (_danger.danger.github.pr.body.length < 8) {
  (0, _danger.fail)('Please include a description of your PR changes.');
} // Check that someone has been assigned to this PR


if (_danger.danger.github.pr.assignee === null) {
  (0, _danger.fail)('Please assign someone to merge this PR, and optionally include people who should review.');
}

var lernaConfigs = require('./lerna.json');

var labels = lernaConfigs.changelog.labels;
var _danger$github = _danger.danger.github,
    issue = _danger$github.issue,
    pr = _danger$github.pr,
    commits = _danger$github.commits; // check sentence case

var firstChar = pr.title[0];

if (firstChar.toUpperCase() !== firstChar) {
  (0, _danger.fail)('PR name should begin with a capital letter');
} // should have a specified tag to be referenced in CHANGELOG.md


var availableLabels = Object.keys(labels);
var assignedLabels = issue.labels.map(function (label) {
  return label.name;
}).filter(function (name) {
  return availableLabels.filter(function (label) {
    return label.includes(name);
  }).length;
});

if (!assignedLabels.length) {
  (0, _danger.fail)("Requires one of these labels: [`".concat(availableLabels.join('`, `'), "`] to be referenced in CHANGELOG.md"));
}

var uncapitalizedCommits = commits.map(function (commit) {
  return commit.commit.message;
}).filter(function (message) {
  return message[0].toUpperCase() !== message[0];
});

if (uncapitalizedCommits.length) {
  (0, _danger.fail)("Commit messages should begin with a capital letter: [`".concat(uncapitalizedCommits.join('`, `'), "`]"));
} // commit message should be specific


var badCommitMessageExamples = ['Fix test', 'Fix eslint', 'Fix bugs', 'Fix comments', 'Bug fixes'];
var badCommitMessages = commits.map(function (commit) {
  return commit.commit.message;
}).filter(function (message) {
  return badCommitMessageExamples.indexOf(message) !== -1;
});

if (badCommitMessages.length) {
  (0, _danger.markdown)("Commit message should be specific. Checkout [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)");
}