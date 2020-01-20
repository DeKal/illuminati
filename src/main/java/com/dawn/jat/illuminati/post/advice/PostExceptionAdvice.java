package com.dawn.jat.illuminati.post.advice;

import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.exception.QueryListPostNotFoundException;
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
     * Throw Exception when get List Post Not Found.
     */
    @ExceptionHandler(QueryListPostNotFoundException.class)
    public ResponseEntity<Map<String, Object>> exceptionListPost(
            final QueryListPostNotFoundException exception) {
        Map<String, Object> errorInfo = new LinkedHashMap<>();
        errorInfo.put("errorMessage", exception.getMessageFailResp());
        return new ResponseEntity<>(errorInfo, HttpStatus.NOT_FOUND);
    }
}
