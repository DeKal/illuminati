package com.dawn.jat.illuminati.integration;

import static org.assertj.core.api.Assertions.assertThat;

import com.dawn.jat.illuminati.hello.HelloController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.ActiveProfiles;

@ActiveProfiles("staging")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class HelloControllerStagingTest {
    @Autowired
    private HelloController controller;

    @LocalServerPort
    private int port;

    @Test
    void contextLoads() throws Exception {
        assertThat(controller).isNotNull();
    }

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void helloPageShouldReturnDefaultMessage() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/hello",
                String.class)).contains("Hello World in Staging!!!");
    }
}
