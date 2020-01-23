package com.dawn.jat.illuminati.core.response;

import java.util.List;

import lombok.Getter;

@Getter
public class SuccessResponse {
    private List<?> data;
    private final Boolean success = true;
    
    public SuccessResponse(List<?> data) {
        this.data = data;
    }
}
