package com.dawn.jat.illuminati.unit.post;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class PostControllerTest {

    @Autowired
    TestRestTemplate restTemplate;

    @Test
    public void getPostByAvaiIdRespOK() {
        ResponseEntity<String> responseEntity = restTemplate
                .getForEntity("/post/1", String.class);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("OK", responseEntity.getBody());
    }

    @Test
    public void getPostByUnavaiIdRespBadReq() {
        ResponseEntity<String> responseEntity = restTemplate
                .getForEntity("/post/123$%", String.class);

        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals("Cannot find post", responseEntity.getBody());
    }
}
