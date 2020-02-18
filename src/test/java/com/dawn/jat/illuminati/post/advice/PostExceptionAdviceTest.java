package com.dawn.jat.illuminati.post.advice;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.dawn.jat.illuminati.core.response.ErrorResponse;
import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.exception.PostSummaryNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


public class PostExceptionAdviceTest {

    private PostExceptionAdvice advice = new PostExceptionAdvice();

    @Test
    void exception_throwException_returnHttpPostNotFound() {
        PostNotFoundException postException = new PostNotFoundException("Cannot find post");

        ResponseEntity<ErrorResponse> rsp = advice.exception(postException);
        assertEquals("Cannot find post", postException.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, rsp.getStatusCode());
    }

    @Test
    void exception_throwException_returnHttpPostSummaryNoContent() {
        PostSummaryNotFoundException postSummaryException =
                new PostSummaryNotFoundException("Cannot find post summary");

        ResponseEntity<ErrorResponse> rsp = advice.exceptionPostSummary(postSummaryException);
        assertEquals("Cannot find post summary", postSummaryException.getMessage());
        assertEquals(HttpStatus.OK, rsp.getStatusCode());
    }
}