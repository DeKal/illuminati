## Continuous Deployment(CD)
CD is supported by Heroku Pipeline, separating into 3 stages: 

``PR Apps -> Staging App -> Production App``

1) Every time, a PR is created, a new PR App will be deployed on Heroku
2) When PR is closed, app will be deployed on Staging
3) The end of development cycle, we release a version on Production App