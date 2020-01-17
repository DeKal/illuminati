package com.dawn.jat.illuminati.post.controller;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import com.dawn.jat.illuminati.post.PostNotfoundException;
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
        postEntity1 = new PostEntity("1", "How to apply Agile methodology", "Guide",
                "01/01/2020", new String[] {"Agile"}, "Phat Ho");
        postEntity2 = new PostEntity("2", "Getting started with ReactJS", "Guide",
                "02/01/2020", new String[]{"Web Developement", "Frontend"}, "Phat Ho");
    }

    @Test
    void findPostAll_whenNoRecord() {

        Mockito.when(postService.findAll()).thenReturn(Arrays.asList());
        assertThat(postController.findAll().size(), is(0));
        Mockito.verify(postService, Mockito.times(1)).findAll();
    }

    @Test
    void findPostAll_whenRecord() {
        Mockito.when(postService.findAll()).thenReturn(Arrays.asList(postEntity1, postEntity2));
        assertThat(postController.findAll().size(), is(2));
        Mockito.verify(postService, Mockito.times(1)).findAll();
    }

    @Test
    public void whenPostIdIsAvail_thenRetrievedPostIsCorrect() {
        Mockito.when(postService.findById("1")).thenReturn(Optional.of(postEntity1));
        ResponseEntity<Object> responseEntity = postController.getPostById("1");
        assertNotNull(responseEntity);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
    }

    @Test
    void whenPostIdIsUnavail_thenRetrievedPostIsIncorrect() {
        assertThrows(PostNotfoundException.class, () -> {
            postController.getPostById("1A467");
        });
    }
}