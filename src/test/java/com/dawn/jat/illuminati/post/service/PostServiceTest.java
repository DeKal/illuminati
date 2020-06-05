package com.dawn.jat.illuminati.post.service;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;

import com.dawn.jat.illuminati.core.mapper.Converter;
import com.dawn.jat.illuminati.post.dto.PostDto;
import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.repository.PostRepository;
import com.dawn.jat.illuminati.post.repository.PostSummaryRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
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
    private static PostDto postDto;
    private static PostSummaryEntity postSummaryEntity;

    @Mock
    PostRepository postRepository;

    @Mock
    PostSummaryRepository postSummaryRepository;

    @Mock
    Converter converter;

    @InjectMocks
    PostService postService;

    /**
     * Initializing postEntity object.
     */
    @BeforeAll
    public static void init() {
        postEntity = new PostEntity("how-to-apply-agile-methodology",
                "How to apply Agile methodology",
                "Guide",
                "01/01/2020",
                new ArrayList<>(Arrays.asList("Agile")),
                "Phat Ho");
        HashMap tags = new HashMap();
        tags.put("System Design", Boolean.TRUE);
        tags.put("OOP", Boolean.TRUE);
        postDto = new PostDto("5e80afe11de7a40da7f97052",
                "how-to-apply-agile-methodology",
                "How to apply Agile methodology new",
                "How to apply Agile methodology new",
                "01/01/2020 new",
                "Li Li new",
                "new content",
                10,
                tags);
    }

    @Test
    public void findPostSummary_whenNoRecord() {
        Mockito.when(postSummaryRepository.findAll()).thenReturn(Arrays.asList());
        assertThat(postService.getPostList().size(), is(0));
        Mockito.verify(postSummaryRepository, Mockito.times(1)).findAll();
    }

    @Test
    public void findPostSummary_whenRecord() {
        List mockPostEntities = Arrays.asList(postSummaryEntity);

        Mockito.when(postSummaryRepository.findAll()).thenReturn(mockPostEntities);
        assertThat(postService.getPostList().size(), is(1));
        assertThat(postService.getPostList().get(0), is(postSummaryEntity));
        Mockito.verify(postSummaryRepository, Mockito.times(2)).findAll();
    }

    @Test
    public void findPostBySlug() {
        String mockSlug = postEntity.getSlug();
        PostEntity mockPostEntities = postEntity;

        Mockito.when(postRepository.findBySlug(mockSlug)).thenReturn(mockPostEntities);
        assertThat(postService.getPost(mockSlug), is(postDto));
        Mockito.verify(postRepository, Mockito.times(1)).findBySlug(mockSlug);
    }

    @Test
    void deletePostBySlug() {
        String mockSlug = postEntity.getSlug();

        postService.deleteBySlug(mockSlug);
        Mockito.verify(postRepository, Mockito.times(1)).deleteBySlug(mockSlug);
    }

    @Test
    void create() {
        Mockito.when(converter.convertPostDtoToEntity(eq(postDto), any(PostEntity.class)))
                .thenReturn(postEntity);
        Mockito.when(postRepository.savePost(any(PostEntity.class)))
                .thenReturn(postEntity);
        assertThat(postService.createPost(postDto), is(postEntity));
        Mockito.verify(postRepository, Mockito.times(1)).savePost(postEntity);
    }

    @Test
    void savePost_WithDto_SuccessfullySaveDto() {

        PostEntity expectedPost = new PostEntity("how-to-apply-agile-methodology",
                "How to apply Agile methodology new",
                "How to apply Agile methodology new",
                "01/01/2020 new",
                new ArrayList<>(Arrays.asList("System Design", "OOP")),
                "Li Li new");
        expectedPost.setContent("new content");
        Mockito.when(postRepository.findById(postDto.getId()))
                .thenReturn(Optional.of(postEntity));
        Mockito.when(postRepository.findById(postDto.getId()))
                .thenReturn(Optional.of(postEntity));

        postService.savePost(postDto);


        Mockito.verify(postRepository, Mockito.times(1)).findById(postDto.getId());
    }

    @Test
    void savePost_WithDto_ThrowPostNotFoundException() {
        PostEntity expectedPost = new PostEntity("how-to-apply-agile-methodology",
                "How to apply Agile methodology new",
                "How to apply Agile methodology new",
                "01/01/2020 new",
                new ArrayList<>(Arrays.asList("System Design", "OOP")),
                "Li Li new");
        expectedPost.setContent("new content");
        Mockito.when(postRepository.findById(postDto.getId()))
                .thenReturn(Optional.empty());

        Assertions.assertThrows(PostNotFoundException.class, () -> {
            postService.savePost(postDto);
        });
    }
}