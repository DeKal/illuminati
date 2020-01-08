package com.dawn.jat.illuminati.unit.hello;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.dawn.jat.illuminati.hello.controller.HelloController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class HelloControllerTest {
    @Autowired
    private HelloController controller;

    @Test
    public void helloPage() {
        assertEquals("hello/index", controller.index());
    }
}
