package com.dawn.jat.illuminati.post.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import com.dawn.jat.illuminati.post.dto.PostDto;
import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.exception.PostSummaryNotFoundException;
import com.dawn.jat.illuminati.post.service.PostService;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

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
    private static PostDto postDto;

    @Mock
    private PostService postService;

    @InjectMocks
    private PostController postController;

    /**
     * Initializing postEntity object.
     */
    @BeforeAll
    public static void init() {
        postEntity1 = new PostEntity(
                "how-to-apply-agile-methodology",
                "How to apply Agile methodology",
                "Guide",
                "01/01/2020",
                new ArrayList<>(Arrays.asList("Agile")),
                "Phat Ho",
                "new content");

        postEntity2 = new PostEntity(
                "getting-started-with-reactjs",
                "Getting started with ReactJS",
                "Guide",
                "02/01/2020",
                new ArrayList<>(Arrays.asList("Web Development", "Frontend")),
                "Phat Ho",
                "");

        HashMap tags = new HashMap();
        tags.put("Agile", Boolean.TRUE);
        postDto = new PostDto("5e80afe11de7a40da7f97052",
                "how-to-apply-agile-methodology",
                "How to apply Agile methodology",
                "Guide",
                "01/01/2020",
                "Phat Ho",
                "",
                tags,
                0,0,0);
    }

    @Test
    public void findBySlug_whenPostIdIsAvail_thenRetrievedPostIsCorrect() {
        String mockSlug = postEntity1.getSlug();
        Mockito.when(postService.getPostBySlug(mockSlug)).thenReturn(postDto);

        ResponseEntity<Object> responseEntity = postController.getPostBySlug(mockSlug);
        assertNotNull(responseEntity);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
    }

    @Test
    void findBySlug_whenPostIdIsUnAvail_thenRetrievedPostIsIncorrect() {
        Mockito.when(postService.getPostBySlug(""))
                .thenReturn(null);

        assertThrows(PostNotFoundException.class, () -> {
            postController.getPostBySlug("");
        });
    }

    @Test
    public void getPostSummary_whenPostSummaryIdIsAvail_thenRetrievedPostSummaryIsCorrect() {
        List mockPostEntities = Arrays.asList(postEntity1, postEntity2);
        Mockito.when(postService.getPostSummaries()).thenReturn(mockPostEntities);

        ResponseEntity<Object> responseEntity = postController.getAllPostSummary();
        assertNotNull(responseEntity);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
    }

    @Test
    public void getPostSummary_whenPostSummaryIdIsUnAvail_thenRetrievedPostSummaryIsIncorrect() {
        Mockito.when(postService.getPostSummaries())
                .thenReturn(new ArrayList<>());

        assertThrows(PostSummaryNotFoundException.class, () -> {
            postController.getAllPostSummary();
        });
    }

    @Test
    public void create_whenPostSuccessfullyCreate_sendSuccessResponseWithPost() {
        Mockito.when(postService.createPost(postDto))
                .thenReturn(postDto);

        ResponseEntity<?> responseEntity = postController.createPost(postDto);
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
    }

    @Test
    public void savePost_whenPostSuccessfullySaved_sendSuccessResponseWithPost() {
        Mockito.when(postService.savePost(postDto))
                .thenReturn(postDto);

        ResponseEntity<?> responseEntity = postController.savePost(postDto);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }
}