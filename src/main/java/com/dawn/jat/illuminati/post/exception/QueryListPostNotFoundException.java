package com.dawn.jat.illuminati.post.exception;

import java.util.Map;

public class QueryListPostNotFoundException extends RuntimeException {
    private Map<String, Object> bodyMsg;

    public QueryListPostNotFoundException(Map<String, Object> bodyMsg) {
        this.bodyMsg = bodyMsg;
    }

    public Map<String, Object> getMessageFailResp() {
        return this.bodyMsg;
    }
}
