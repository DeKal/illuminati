package com.dawn.jat.illuminati.post.advice;

import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class PostExceptionAdvice {
    @ExceptionHandler(value = PostNotFoundException.class)
    public ResponseEntity<Object> exception(PostNotFoundException exception) {
        return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }
}
