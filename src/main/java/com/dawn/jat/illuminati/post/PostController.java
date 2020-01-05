package com.dawn.jat.illuminati.post;

import com.dawn.jat.illuminati.entities.Post;
import com.dawn.jat.illuminati.service.PostService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PostController {
    @Autowired
    PostService postService;

    /**
     * Gets a Post by the Title.
     */
    @RequestMapping(value = "/post/{title}")
    public ResponseEntity<String> getPostByTitle(@PathVariable("title") String title) {
        List<Post> post = postService.findByTitle(title);

        if (post.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body("Cannot find post");
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body("OK");
    }
}
