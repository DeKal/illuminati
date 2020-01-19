package com.dawn.jat.illuminati.post.advice;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.dawn.jat.illuminati.post.exception.PostNotFoundException;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


public class PostExceptionAdviceTest {

    private PostExceptionAdvice advice = new PostExceptionAdvice();

    @Test
    void exception_throwException_returnHttpNotFound() {
        PostNotFoundException postException = new PostNotFoundException("");
        ResponseEntity<Object> rsp = advice.exception(postException);
        assertEquals(HttpStatus.NOT_FOUND, rsp.getStatusCode());
    }
}