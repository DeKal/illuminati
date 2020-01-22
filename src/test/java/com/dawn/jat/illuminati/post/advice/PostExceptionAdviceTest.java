package com.dawn.jat.illuminati.post.advice;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.dawn.jat.illuminati.post.exception.PostNotFoundException;
import com.dawn.jat.illuminati.post.exception.QueryListPostNotFoundException;
import java.util.LinkedHashMap;
import java.util.Map;
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

    @Test
    void exception_throwException_returnHttpPostBriefNotFound() {
        Map<String, Object> errorInfo = new LinkedHashMap<>();
        errorInfo.put("errorMessage", "List Of Post Brief Not Found");

        QueryListPostNotFoundException postBriefException =
                new QueryListPostNotFoundException(errorInfo);
        ResponseEntity<Map<String, Object>> rsp = advice.exceptionListPost(postBriefException);
        assertEquals(HttpStatus.NOT_FOUND, rsp.getStatusCode());
    }
}