## Building Process
Basically, we will separate the app into two parts: Front End and API. 
The Front End part is built with Create React App (CRA), and the API will be built using Spring MVC Framework. 
 Gradle will be use to compile a Spring Application and on the other hand, build the React code for the Spring App to
  serve. 
The full build steps are at follows (Read `build.gradle` for the full understanding):
1) All the Java code and Resources will be compiled, combined and stored in to folder `build/`
2) NodeJs environment will be setup in `.gradle`
3) Dependencies for React app will be installed
4) React application is built in production mode using `yarn build` 
5) React code build is copied into `build/resources/main`
6) War file is packed and served
