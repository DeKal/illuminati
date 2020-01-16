package com.dawn.jat.illuminati.post;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.repository.PostRepository;
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

@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class PostServiceTest {
    private static PostEntity postEntity;

    @Mock
    PostRepository postRepository;

    @InjectMocks
    PostService postService;

    /**
     * Initializing postEntity object.
     */
    @BeforeAll
    public static void init() {
        postEntity = new PostEntity("1", "How to apply Agile methodology", "Guide",
                "01/01/2020", new String[] {"Agile"});
    }

    @Test
    public void findAllPost_whenNoRecord() {
        Mockito.when(postRepository.findAll()).thenReturn(Arrays.asList());
        assertThat(postService.findAll().size(), is(0));
        Mockito.verify(postRepository, Mockito.times(1)).findAll();
    }

    @Test
    public void findAllPost_whenRecord() {
        Mockito.when(postRepository.findAll()).thenReturn(Arrays.asList(postEntity));
        assertThat(postService.findAll().size(), is(1));
        assertThat(postService.findAll().get(0), is(postEntity));
        Mockito.verify(postRepository, Mockito.times(2)).findAll();
    }

    @Test
    public void findPostById() {
        Mockito.when(postRepository.findById("1")).thenReturn(Optional.of(postEntity));
        assertThat(postService.findById("1"), is(Optional.of(postEntity)));
        Mockito.verify(postRepository, Mockito.times(1)).findById("1");
    }

    @Test
    void deletePostById() {
        postService.deleteById("1");
        Mockito.verify(postRepository, Mockito.times(1)).deleteById("1");
    }

    @Test
    void createOrUpdatePost() {
        Mockito.when(postRepository.save(postEntity)).thenReturn(postEntity);
        assertThat(postService.createOrUpdate(postEntity), is(postEntity));
        Mockito.verify(postRepository, Mockito.times(1)).save(postEntity);
    }
}