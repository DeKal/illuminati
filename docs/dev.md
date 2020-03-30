## Development

### Code Style
- Following Google convention.
- Set Tab with Indent = 4.

### Gradle Run
```bash
./gradlew bootRun
```

### Continuous Auto-restart With Spring Boot DevTools and Gradle

 **Note: The two following configs are for developers who only want to work on server part only and developers want to
  work on both server and cms. This is to cut down the time when we have to build cms over again with every change in
   server.**

## Hot Reload with only Spring mvc, no cms build
For non-Window users, we need to open two terminals:

1) At the first terminal, start Gradle build as a continuous task: 
```bash
./scripts/hot-reload-server.sh
```
2) At the second terminal, start the Gradle bootRun task: 
```bash
./scripts/run.sh
```

## Hot Reload including cms
For non-Window users, we need to open two terminals:

1) At the first terminal, start Gradle build as a continuous task: 
```bash
./scripts/hot-reload-with-cms.sh
```
2) At the second terminal, start the Gradle bootRun task: 
```bash
./scripts/run.sh
```