package com.dawn.jat.illuminati.post.controller;

import com.dawn.jat.illuminati.post.PostNotfoundException;
import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.repository.PostRepository;
import com.dawn.jat.illuminati.post.service.PostService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/api/post"})
public class PostController {
    @Autowired
    private PostService postService;

    @Autowired
    private PostRepository postRepository;

    @GetMapping
    public List<PostEntity> findAll() {
        return postService.findAll();
    }

    /**
     * Gets a Post by the Id.
     */
    @GetMapping(value = "/{id}")
    public ResponseEntity<Object> getAPostById(@PathVariable("id") String id) {
        Optional<PostEntity> postEntity = postService.findById(id);

        if (!postEntity.isPresent()) {
            throw new PostNotfoundException();
        }
        return new ResponseEntity<>(postEntity, HttpStatus.OK);
    }
}
