package com.dawn.jat.illuminati.post.controller;

import com.dawn.jat.illuminati.post.PostNotfoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class PostExceptionController {
    @ExceptionHandler(value = PostNotfoundException.class)
    public ResponseEntity<Object> exception(PostNotfoundException exception) {
        return new ResponseEntity<>("Post not found", HttpStatus.NOT_FOUND);
    }
}
