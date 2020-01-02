package com.dawn.jat.illuminati.hello;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@ActiveProfiles("staging")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class HelloControllerStagingTest {
    @Autowired
    private HelloController controller;

    @Test
    public void helloPage() {
        assertEquals("hello/staging", controller.index());
    }
}
