package com.dawn.jat.illuminati.post.response;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.LinkedHashMap;
import java.util.Map;
import org.junit.jupiter.api.Test;

public class ErrorResponseTest {
    @Test
    void exception_throwException_returnGetPostErrRespStatus() {
        ErrorResponse errResp = new ErrorResponse();
        Map<String, Object> errCode = new LinkedHashMap<>();

        errCode.put("code", 204);
        errResp.setError(errCode);
        errResp.setSuccess(false);
        assertEquals(false, errResp.getSuccess());
        assertEquals(errCode, errResp.getError());
    }
}
