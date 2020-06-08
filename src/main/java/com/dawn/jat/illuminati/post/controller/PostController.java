package com.dawn.jat.illuminati.post.controller;

import com.dawn.jat.illuminati.core.response.SuccessResponse;
import com.dawn.jat.illuminati.docs.entity.GetPostResponse;
import com.dawn.jat.illuminati.docs.entity.PostSummariesResponse;
import com.dawn.jat.illuminati.post.dto.PostDto;
import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import com.dawn.jat.illuminati.post.exception.PostCannotBeSavedException;
import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.exception.PostSummaryNotFoundException;
import com.dawn.jat.illuminati.post.service.PostService;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping({"/api/post"})
public class PostController {
    @Autowired
    private PostService postService;

    /**
     * Gets a Post by the slug.
     */
    @GetMapping(value = "/{slug}")
    @ApiResponses({@ApiResponse(code = 200, message = "OK", response = GetPostResponse.class)})
    public ResponseEntity<Object> getPostBySlug(@PathVariable("slug") String slug) {
        PostDto postDto = postService.getPostBySlug(slug);

        if (Objects.isNull(postDto)) {
            throw new PostNotFoundException("Cannot find post");
        }
        SuccessResponse resp = new SuccessResponse(postDto);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    /**
     * Gets list of Post Summary.
     *
     * @throws PostSummaryNotFoundException if Post Summary has No Content
     */
    @GetMapping(value = "/all-post/summary")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK", response = PostSummariesResponse.class)
    })
    public ResponseEntity<Object> getAllPostSummary() {
        List<PostSummaryEntity> allPost = postService.getPostSummaries();

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
    @ApiResponses({@ApiResponse(code = 200, message = "OK", response = GetPostResponse.class)})
    public ResponseEntity<?> createPost(@RequestBody PostDto inputPostDto) {
        PostDto newPostDto = postService.createPost(inputPostDto);

        SuccessResponse resp = new SuccessResponse(newPostDto);
        return new ResponseEntity<>(resp, HttpStatus.CREATED);
    }

    /**
     * Save an edited Post in to database.
     *
     * @throws PostCannotBeSavedException if post cannot be saved
     */
    @PostMapping(value = "/save")
    @ApiResponses({@ApiResponse(code = 200, message = "OK", response = GetPostResponse.class)})
    public ResponseEntity<?> savePost(@RequestBody PostDto inputPostDto) {
        PostDto newPostDto = postService.savePost(inputPostDto);
        SuccessResponse resp = new SuccessResponse(newPostDto);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }
}