package com.dawn.jat.illuminati.post.service;

import com.dawn.jat.illuminati.core.mapper.Converter;
import com.dawn.jat.illuminati.post.dto.PostDto;
import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import com.dawn.jat.illuminati.post.exception.PostCannotBeSavedException;
import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.repository.PostRepository;
import com.dawn.jat.illuminati.post.repository.PostSummaryRepository;
import java.util.List;
import java.util.Objects;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PostService {
    @Autowired
    private Converter converter;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PostSummaryRepository postSummaryRepository;

    @Autowired
    private ModelMapper modelMapper;

    public List<PostSummaryEntity> getPostSummaries() {
        return postSummaryRepository.findAll();
    }

    /**
     * Get Post by Slug.
     *
     * @param slug String
     * @return PostDto
     */
    public PostDto getPostBySlug(String slug) {
        return modelMapper.map(postRepository.findBySlug(slug), PostDto.class);
    }

    /**
     * Create new Entity from postDTO receive from client.
     *
     * @param postDto PostDto
     * @return PostDto
     */
    public PostDto createPost(PostDto postDto) {
        PostEntity post = new PostEntity();
        post = converter.convertPostDtoToEntity(postDto, post);
        postRepository.savePost(post);
        return postDto;
    }

    /**
     * Save a post info to an existing post.
     *
     * @param rawPostDto PostDto
     * @return PostDto
     */
    public PostDto savePost(PostDto rawPostDto) {
        PostDto postDto = validateExistPost(rawPostDto);
        PostEntity postEntity = postRepository.findById(postDto.getId()).get();
        postEntity = converter.convertPostDtoToEntity(postDto, postEntity);
        postEntity = postRepository.savePost(postEntity);
        if (Objects.isNull(postEntity)) {
            throw new PostCannotBeSavedException("Post can not be saved.");
        }
        return postDto;
    }

    /**
     * Validate Existing Post.
     *
     * @param postDto PostDto
     * @return PostDto
     */
    private PostDto validateExistPost(PostDto postDto) {
        if (Objects.isNull(postDto.getId())) {
            throw new PostNotFoundException(
                    "Requested information is not exist. May be it was deleted."
            );
        }
        Boolean existPost = postRepository.existsById(postDto.getId());
        if (!existPost) {
            throw new PostNotFoundException(
                    "Requested information is not exist. May be it was deleted."
            );
        }
        return postDto;
    }

    /**
     * Delete an existing post.
     *
     * @param slug String
     */
    public void deleteBySlug(String slug) {
        postRepository.deleteBySlug(slug);
    }
}
