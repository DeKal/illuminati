package com.dawn.jat.illuminati.post.service;

import com.dawn.jat.illuminati.core.convert.Converter;
import com.dawn.jat.illuminati.post.dto.PostDto;
import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.repository.PostRepository;
import com.dawn.jat.illuminati.post.repository.PostSummaryRepository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PostService {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PostSummaryRepository postSummaryRepository;

    public List<PostSummaryEntity> findPostSummary() {
        return postSummaryRepository.findAll();
    }

    public Optional<PostEntity> findBySlug(String slug) {
        return postRepository.findBySlug(slug);
    }

    public PostEntity create(PostDto postDto) {
        PostEntity post = new PostEntity();
        post = Converter.convertPostDtoToEntity(postDto, post);
        return postRepository.savePost(post);
    }

    private PostEntity findById(String id) {
        Optional<PostEntity> postObj = postRepository.findById(id);
        if (!postObj.isPresent()) {
            throw new PostNotFoundException("Saved post cannot be found!!!");
        }
        return postObj.get();
    }

    public PostEntity save(PostDto postDto) {
        PostEntity savedPost = findById(postDto.getId());
        savedPost = Converter.convertPostDtoToEntity(postDto, savedPost);
        return postRepository.savePost(savedPost);
    }

    public void deleteBySlug(String slug) {
        postRepository.deleteBySlug(slug);
    }
}
