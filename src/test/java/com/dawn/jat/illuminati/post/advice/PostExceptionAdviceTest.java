package com.dawn.jat.illuminati.post.advice;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.exception.PostSummaryNotFoundException;
import com.dawn.jat.illuminati.post.response.ErrorResponse;
import java.util.LinkedHashMap;
import java.util.Map;
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

        ErrorResponse errResp = new ErrorResponse();
        Map<String, Object> errCode = new LinkedHashMap<>();

        errCode.put("code", 204);
        errResp.setError(errCode);
        errResp.setSuccess(false);
        assertEquals(false, errResp.getSuccess());
        assertEquals(errCode, errResp.getError());
    }
}