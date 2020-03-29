package com.dawn.jat.illuminati.post.controller;

import com.dawn.jat.illuminati.core.response.SuccessResponse;
import com.dawn.jat.illuminati.post.dto.PostDto;
import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import com.dawn.jat.illuminati.post.exception.PostCannotBeSavedException;
import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.exception.PostSummaryNotFoundException;
import com.dawn.jat.illuminati.post.service.PostService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping({"/api/post"})
public class PostController {
    @Autowired
    private PostService postService;

    /**
     * Gets a Post by the slug.
     */
    @GetMapping(value = "/{slug}")
    public ResponseEntity<Object> getPostBySlug(@PathVariable("slug") String slug) {
        Optional<PostEntity> postEntity = postService.findBySlug(slug);

        if (!postEntity.isPresent()) {
            throw new PostNotFoundException("Cannot find post");
        }

        SuccessResponse resp = new SuccessResponse(postEntity);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    /**
     * Gets list of Post Summary.
     * @throws PostSummaryNotFoundException if Post Summary has No Content
     */
    @GetMapping(value = "/all-post/summary")
    public ResponseEntity<Object> getAllPostSummary() {
        List<PostSummaryEntity> allPost = postService.findPostSummary();

        if (allPost.isEmpty()) {
            throw new PostSummaryNotFoundException("Cannot find post summary");
        }

        SuccessResponse resp = new SuccessResponse(allPost);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    /**
     * Create a Post in to database.
     */
    @PostMapping(value = "/create")
    public ResponseEntity<Object> createPost(@RequestBody PostDto post) {
        PostEntity savedPost = postService.create(post);
        SuccessResponse resp = new SuccessResponse(savedPost);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    /**
     * Save an edited Post in to database.
     * @throws PostCannotBeSavedException if post cannot be saved
     */
    @PostMapping(value = "/save")
    public ResponseEntity<Object> savePost(@RequestBody PostDto post) {
        PostEntity savedPost = postService.save(post);
        if (savedPost == null) {
            throw new PostCannotBeSavedException("Failed to save Post");
        }
        SuccessResponse resp = new SuccessResponse(savedPost);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }
}