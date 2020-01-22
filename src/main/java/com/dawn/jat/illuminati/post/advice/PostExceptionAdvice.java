package com.dawn.jat.illuminati.post.advice;

import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.exception.PostSummaryNotFoundException;
import com.dawn.jat.illuminati.post.response.ErrorResponse;
import java.util.LinkedHashMap;
import java.util.Map;
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
    public ResponseEntity<Object> exception(PostNotFoundException exception) {
        return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }

    /**
     * Throw Exception if Post Summary has No Content.
     */
    @ExceptionHandler(PostSummaryNotFoundException.class)
    public ResponseEntity<ErrorResponse> exceptionPostSummary(Exception exception) {
        Map<String, Object> err = new LinkedHashMap<>();
        ErrorResponse error = new ErrorResponse();
        err.put("code", HttpStatus.NO_CONTENT.value());
        err.put("message", exception.getMessage());
        error.setError(err);
        error.setSuccess(false);
        return new ResponseEntity<>(error, HttpStatus.OK);
    }
}
