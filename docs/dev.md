## Development

### Code Style
- Following Google convention.
- Set Tab with Indent = 4.

### Gradle Run
```bash
./gradlew bootRun
```

### Continuous Auto-restart With Spring Boot DevTools and Gradle
We need to open two terminals:

1) At the first terminal, start Gradle build as a continuous task: 
```bash
gradle build --continuous
```
2) At the second terminal, start the Gradle bootRun task: 
```bash
gradle bootRun
```