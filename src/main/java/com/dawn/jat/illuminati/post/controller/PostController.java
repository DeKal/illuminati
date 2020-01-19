package com.dawn.jat.illuminati.post.controller;

import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
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

    @GetMapping
    public List<PostEntity> findAll() {
        return postService.findAll();
    }

    /**
     * Gets a Post by the slug.
     */
    @GetMapping(value = "/{slug}")
    public ResponseEntity<Object> getPostBySlug(@PathVariable("slug") String slug) {
        Optional<PostEntity> postEntity = postService.findBySlug(slug);

        if (!postEntity.isPresent()) {
            throw new PostNotFoundException("Cannot find post");
        }
        return new ResponseEntity<>(postEntity, HttpStatus.OK);
    }
}
