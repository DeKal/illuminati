package com.dawn.jat.illuminati;

import static org.assertj.core.api.Assertions.assertThat;

import com.dawn.jat.illuminati.hello.HelloController;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
class IlluminatiApplicationTests {
    @Autowired
    private HelloController controller;

    @Test
    void contextLoads() throws Exception {
        assertThat(controller).isNotNull();
    }
}