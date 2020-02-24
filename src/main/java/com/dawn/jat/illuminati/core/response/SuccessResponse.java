package com.dawn.jat.illuminati.core.response;

import lombok.Getter;

@Getter
public class SuccessResponse {
    private Object data;
    private final Boolean success = true;
    
    public SuccessResponse(Object data) {
        this.data = data;
    }
}
