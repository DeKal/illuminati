package com.dawn.jat.illuminati.post.controller;

import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.service.PostService;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PostController {
    @Autowired
    PostService postService;

    /**
     * Gets a Post by the Id.
     */
    @RequestMapping(value = "/post/{id}")
    public ResponseEntity<String> getPostById(@PathVariable("id") String id) {
        Optional<PostEntity> post = postService.findById(id);

        if (post.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body("OK");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("Cannot find post");
    }
}
