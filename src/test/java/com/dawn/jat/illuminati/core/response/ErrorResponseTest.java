package com.dawn.jat.illuminati.core.response;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.LinkedHashMap;
import java.util.Map;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;


public class ErrorResponseTest {
    @Test
    void exception_throwException_returnGetPostErrRespStatus() {
        Exception ex = new Exception("test exception");
        ErrorResponse errResp = new ErrorResponse(HttpStatus.NOT_FOUND, ex);

        Map<String, Object> expectedError = new LinkedHashMap<>();

        expectedError.put("code", 404);
        expectedError.put("message", "test exception");

        assertEquals(false, errResp.getSuccess());
        assertEquals(expectedError, errResp.getError());
    }
}
