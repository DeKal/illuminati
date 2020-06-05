package com.dawn.jat.illuminati.post.service;

import com.dawn.jat.illuminati.core.mapper.Converter;
import com.dawn.jat.illuminati.post.dto.PostDto;
import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.repository.PostRepository;
import com.dawn.jat.illuminati.post.repository.PostSummaryRepository;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
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

    public List<PostSummaryEntity> getPostList() {
        return postSummaryRepository.findAll();
    }

    /**
     * Get Post by Slug.
     *
     * @param slug String
     * @return PostDto
     */
    public PostDto getPost(String slug) {
        ModelMapper modelMapper = new ModelMapper();
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
        postDto.setId(post.getId());
        return postDto;
    }

    /**
     * Find Post by id.
     *
     * @param id String
     * @return PostDto
     */
    private PostDto getPostById(String id) {
        Optional<PostEntity> postObj = postRepository.findById(id);
        if (!postObj.isPresent()) {
            throw new PostNotFoundException("Saved post cannot be found!!!");
        }
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(postObj.get(), PostDto.class);
    }

    /**
     * Save a post info to an existing post.
     *
     * @param postDto PostDto
     * @return Boolean
     */
    public Boolean savePost(PostDto postDto) {
        String id = postDto.getId();
        if (Objects.isNull(id)) {
            return false;
        }
        PostDto newPostDto = getPostById(postDto.getId());
        PostEntity newPostEntity = new PostEntity();
        newPostEntity = converter.convertPostDtoToEntity(newPostDto, newPostEntity);
        postRepository.savePost(newPostEntity);
        return true;
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
