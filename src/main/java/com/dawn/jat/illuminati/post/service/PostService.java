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
        PostEntity postEntity = new PostEntity();
        postEntity = converter.convertPostDtoToEntity(postDto, postEntity);
        postEntity = postRepository.savePost(postEntity);
        return modelMapper.map(postEntity, PostDto.class);
    }

    /**
     * Save a post info to an existing post.
     *
     * @param postDto PostDto
     * @return PostDto
     */
    public PostDto savePost(PostDto postDto) {
        PostEntity resultPostEntity = null;
        if (validateExistPost(postDto)) {
            PostEntity existedPostEntity = postRepository.findById(postDto.getId()).get();
            PostEntity savePostEntity =
                    converter.convertPostDtoToEntity(postDto, existedPostEntity);
            resultPostEntity = postRepository.savePost(savePostEntity);
        }
        if (Objects.isNull(resultPostEntity)) {
            throw new PostCannotBeSavedException("Post can not be saved.");
        }
        return modelMapper.map(resultPostEntity, PostDto.class);
    }

    /**
     * Validate Existing Post.
     *
     * @param postDto PostDto
     * @return PostDto
     */
    private Boolean validateExistPost(PostDto postDto) {
        if (Objects.isNull(postDto.getId())) {
            return false;
        }
        Boolean existPost = postRepository.existsById(postDto.getId());
        if (!existPost) {
            return false;
        }
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
