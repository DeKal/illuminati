package com.dawn.jat.illuminati.integration.post;

import static org.assertj.core.api.Assertions.assertThat;

import com.dawn.jat.illuminati.post.controller.PostController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class PostEntityControllerTest {
    @Autowired
    private PostController controller;

    @Test
    void contextLoads() throws Exception {
        assertThat(controller).isNotNull();
    }

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void getPostByAvaiIdShouldRespOK() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/post/1",
                String.class)).contains("OK");
    }

    public void getPostByUnavaiIdShouldRepBadReq() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/post/Java",
                String.class)).contains("Cannot find post");
    }
}


