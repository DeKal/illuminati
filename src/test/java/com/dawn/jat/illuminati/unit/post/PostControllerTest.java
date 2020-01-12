package com.dawn.jat.illuminati.unit.post;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.dawn.jat.illuminati.post.controller.PostController;
import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.service.PostService;

import java.util.Arrays;
import java.util.Optional;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class PostControllerTest {
    private static PostEntity postEntity1;
    private static PostEntity postEntity2;

    @Mock
    private PostService postService;

    @InjectMocks
    private PostController postController;

    /**
     * Initializing postEntity object.
     */
    @BeforeAll
    public static void init() {
        postEntity1 = new PostEntity();
        postEntity1.setId("1");
        postEntity1.setBrief("Guide");
        postEntity1.setTag("Agile");
        postEntity1.setTime("01/2020");
        postEntity1.setTitle("How to apply Agile methodology");

        postEntity2 = new PostEntity();
    }

    @Test
    void findPostAll_whenNoRecord() {

        Mockito.when(postService.findAll()).thenReturn(Arrays.asList());
        assertThat(postController.findAll().size(), is(0));
        Mockito.verify(postService, Mockito.times(1)).findAll();
    }

    @Test
    void findPostAll_whenRecord() {
        Mockito.when(postService.findAll()).thenReturn(Arrays.asList(postEntity1));
        assertThat(postController.findAll().size(), is(1));
        Mockito.verify(postService, Mockito.times(1)).findAll();
    }

    @Test
    public void twoDiffObj_notEqualsSymmetric() {
        assertFalse(postEntity1.hashCode() == postEntity2.hashCode());
    }

    @Test
    public void postEntity_doNotHave_unexpectedValue() {
        assertFalse(postEntity1.toString().contains("@$*&$abzn&*"));
    }

    @Test
    public void whenPostIdIsAvail_thenRetrievedPostIsCorrect() {
        Mockito.when(postService.findById("1")).thenReturn(Optional.of(new PostEntity()));
        ResponseEntity<String> responseEntity = postController.getPostById("1");
        assertNotNull(responseEntity);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
    }

    @Test
    public void whenPostIdIsUnavail_thenRetrievedPostIsIncorrect() {
        ResponseEntity<String> responseEntity = postController.getPostById("1A467");
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertNotEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }
}
