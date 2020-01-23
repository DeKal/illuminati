package com.dawn.jat.illuminati.post.service;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import com.dawn.jat.illuminati.post.repository.PostRepository;
import com.dawn.jat.illuminati.post.repository.PostSummaryRepository;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class PostServiceTest {
    private static PostEntity postEntity;
    private static PostSummaryEntity postSummaryEntity;

    @Mock
    PostRepository postRepository;

    @Mock
    PostSummaryRepository postSummaryRepository;

    @InjectMocks
    PostService postService;

    /**
     * Initializing postEntity object.
     */
    @BeforeAll
    public static void init() {
        postEntity = new PostEntity("how-to-apply-agile-methodology",
                "How to apply Agile methodology", "Guide",
                "01/01/2020", new String[] {"Agile"}, "Phat Ho");
    }

    @Test
    public void findPostSummary_whenNoRecord() {
        Mockito.when(postSummaryRepository.findAll()).thenReturn(Arrays.asList());
        assertThat(postService.findPostSummary().size(), is(0));
        Mockito.verify(postSummaryRepository, Mockito.times(1)).findAll();
    }

    @Test
    public void findPostSummary_whenRecord() {
        List mockPostEntities = Arrays.asList(postSummaryEntity);

        Mockito.when(postSummaryRepository.findAll()).thenReturn(mockPostEntities);
        assertThat(postService.findPostSummary().size(), is(1));
        assertThat(postService.findPostSummary().get(0), is(postSummaryEntity));
        Mockito.verify(postSummaryRepository, Mockito.times(2)).findAll();
    }

    @Test
    public void findPostBySlug() {
        String mockSlug = postEntity.getSlug();
        Optional<PostEntity> mockPostEntities = Optional.of(postEntity);

        Mockito.when(postRepository.findBySlug(mockSlug)).thenReturn(mockPostEntities);
        assertThat(postService.findBySlug(mockSlug), is(mockPostEntities));
        Mockito.verify(postRepository, Mockito.times(1)).findBySlug(mockSlug);
    }

    @Test
    void deletePostBySlug() {
        String mockSlug = postEntity.getSlug();

        postService.deleteBySlug(mockSlug);
        Mockito.verify(postRepository, Mockito.times(1)).deleteBySlug(mockSlug);
    }

    @Test
    void createOrUpdatePost() {
        Mockito.when(postRepository.save(postEntity)).thenReturn(postEntity);
        assertThat(postService.createOrUpdate(postEntity), is(postEntity));
        Mockito.verify(postRepository, Mockito.times(1)).save(postEntity);
    }
}