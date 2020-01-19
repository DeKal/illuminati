package com.dawn.jat.illuminati.post.service;

import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.repository.PostRepository;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<PostEntity> findAll() {
        return postRepository.findAll();
    }

    public Optional<PostEntity> findBySlug(String slug) {
        return postRepository.findBySlug(slug);
    }

    public PostEntity createOrUpdate(PostEntity postEntity) {
        return postRepository.save(postEntity);
    }

    public void deleteBySlug(String slug) {
        postRepository.deleteBySlug(slug);
    }
}
