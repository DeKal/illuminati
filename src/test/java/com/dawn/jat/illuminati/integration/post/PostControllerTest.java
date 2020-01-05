package com.dawn.jat.illuminati.integration.post;

import static org.assertj.core.api.Assertions.assertThat;

import com.dawn.jat.illuminati.post.PostController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class PostControllerTest {
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
    public void getPostByAvaiTitleShouldRespOK() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/post/Java",
                String.class)).contains("OK");
    }

    public void getPostByUnavaiTitleShouldRepBadReq() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/post/Ruby",
                String.class)).contains("Cannot find post");
    }
}


