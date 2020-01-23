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
        PostNotFoundException postException = new PostNotFoundException("");
        ResponseEntity<Object> rsp = advice.exception(postException);
        assertEquals(HttpStatus.NOT_FOUND, rsp.getStatusCode());
    }

    @Test
    void exception_throwException_returnHttpPostSummaryNoContent() {
        PostSummaryNotFoundException postSummaryException =
                new PostSummaryNotFoundException("Cannot find post summary");

        ResponseEntity<ErrorResponse> rsp = advice.exceptionPostSummary(postSummaryException);
        assertEquals("Cannot find post summary", postSummaryException.getMessage());
        assertEquals(HttpStatus.OK, rsp.getStatusCode());

        ErrorResponse errResp = new ErrorResponse(HttpStatus.NO_CONTENT, postSummaryException);

        assertEquals(rsp.getBody().getError(), errResp.getError());
        assertEquals(rsp.getBody().getSuccess(), errResp.getSuccess());
    }
}