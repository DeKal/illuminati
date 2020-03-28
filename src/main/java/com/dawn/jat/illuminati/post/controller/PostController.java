package com.dawn.jat.illuminati.post.controller;

import com.dawn.jat.illuminati.core.response.SuccessResponse;
import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.exception.PostSummaryNotFoundException;
import com.dawn.jat.illuminati.post.service.PostService;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


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
        PostEntity postEntity = postService.findBySlug(slug);

        if (postEntity == null) {
            throw new PostNotFoundException("Cannot find post");
        }

        postService.updateTimeReadAfterEditedDataOfPost(postEntity);

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


    @PutMapping(value = "/edit/{_id}")
    public void editPostBySlug(@PathVariable("_id") ObjectId _id,
                               @Valid @RequestBody PostEntity postEntity) {
        postService.updateTimeReadAfterEditedDataOfPost(postEntity);

        postEntity.set_id(_id);
        postService.updateDataOfPostInDb(postEntity);
    }
}