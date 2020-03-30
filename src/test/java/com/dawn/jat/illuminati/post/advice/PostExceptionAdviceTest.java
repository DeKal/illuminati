package com.dawn.jat.illuminati.post.advice;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.dawn.jat.illuminati.core.response.ErrorResponse;
import com.dawn.jat.illuminati.post.exception.PostCannotBeSavedException;
import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.exception.PostSummaryNotFoundException;
import java.util.HashMap;
import java.util.Map;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


public class PostExceptionAdviceTest {

    private PostExceptionAdvice advice = new PostExceptionAdvice();

    @Test
    void exception_throwException_returnHttpPostNotFound() {
        PostNotFoundException postException = new PostNotFoundException("Cannot find post");

        ResponseEntity<ErrorResponse> rsp = advice.exception(postException);
        assertEquals(HttpStatus.NOT_FOUND, rsp.getStatusCode());
        assertEquals(404, rsp.getStatusCodeValue());

        Map<String, Object> error = new HashMap<String, Object>();
        error.put("code", 204);
        error.put("message", "Cannot find post");

        assertEquals(error, rsp.getBody().getError());
        assertEquals(false, rsp.getBody().getSuccess());
    }

    @Test
    void exception_throwException_returnHttpPostSummaryNoContent() {
        PostSummaryNotFoundException postSummaryException =
                new PostSummaryNotFoundException("Cannot find post summary");

        ResponseEntity<ErrorResponse> rsp = advice.exceptionPostSummary(postSummaryException);
        assertEquals(HttpStatus.OK, rsp.getStatusCode());
        assertEquals(200, rsp.getStatusCodeValue());

        Map<String, Object> error = new HashMap<String, Object>();
        error.put("code", 204);
        error.put("message", "Cannot find post summary");

        assertEquals(error, rsp.getBody().getError());
        assertEquals(false, rsp.getBody().getSuccess());
    }

    @Test
    void exception_throwException_returnPostCannotBeSavedException() {
        PostCannotBeSavedException postException =
                new PostCannotBeSavedException("Post cannot be save");

        ResponseEntity<ErrorResponse> rsp = advice.exception(postException);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, rsp.getStatusCode());
        assertEquals(500, rsp.getStatusCodeValue());

        Map<String, Object> error = new HashMap<String, Object>();
        error.put("code", 500);
        error.put("message", "Post cannot be save");

        assertEquals(error, rsp.getBody().getError());
        assertEquals(false, rsp.getBody().getSuccess());
    }

    @Test
    void exception_throwException_returnException() {
        Exception exception = new Exception("Some common exception");

        ResponseEntity<ErrorResponse> rsp = advice.exception(exception);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, rsp.getStatusCode());
        assertEquals(500, rsp.getStatusCodeValue());

        Map<String, Object> error = new HashMap<String, Object>();
        error.put("code", 500);
        error.put("message", "Some common exception");

        assertEquals(error, rsp.getBody().getError());
        assertEquals(false, rsp.getBody().getSuccess());
    }
}