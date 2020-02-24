package com.dawn.jat.illuminati.post.advice;

import com.dawn.jat.illuminati.core.response.ErrorResponse;
import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.exception.PostSummaryNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class PostExceptionAdvice {
    /**
     * Throw Exception when the query Slug Unavailable.
     */
    @ExceptionHandler(PostNotFoundException.class)
    public ResponseEntity<ErrorResponse> exception(PostNotFoundException exception) {
        ErrorResponse error = new ErrorResponse(HttpStatus.NO_CONTENT, exception);
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    /**
     * Throw Exception if Post Summary has No Content.
     */
    @ExceptionHandler(PostSummaryNotFoundException.class)
    public ResponseEntity<ErrorResponse> exceptionPostSummary(Exception exception) {
        ErrorResponse error = new ErrorResponse(HttpStatus.NO_CONTENT, exception);
        return new ResponseEntity<>(error, HttpStatus.OK);
    }
}
