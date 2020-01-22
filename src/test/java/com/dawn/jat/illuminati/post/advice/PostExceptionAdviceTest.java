package com.dawn.jat.illuminati.post.advice;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.dawn.jat.illuminati.post.exception.ErrorResponse;
import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.exception.PostSummaryNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class PostExceptionAdviceTest {

    private PostExceptionAdvice advice = new PostExceptionAdvice();

    @Test
    void exception_throwException_returnHttpPostNotFound() {
        PostNotFoundException postException = new PostNotFoundException("");
        ResponseEntity<Object> rsp = advice.exception(postException);
        assertEquals(HttpStatus.NOT_FOUND, rsp.getStatusCode());
    }

    @Test
    void exception_throwException_returnHttpPostSummaryNotFound() {
        ErrorResponse error = new ErrorResponse();
        error.setErrorCode(HttpStatus.NO_CONTENT.toString());
        assertEquals("204 NO_CONTENT", error.getErrorCode());

        PostSummaryNotFoundException postSummaryException =
                new PostSummaryNotFoundException("Cannot find post summary");

        error.setMessage(postSummaryException.getMessage());
        assertEquals("Cannot find post summary", error.getMessage());

        ResponseEntity<ErrorResponse> rsp = advice.exceptionPostSummary(postSummaryException);
        assertEquals(HttpStatus.OK, rsp.getStatusCode());
    }
}