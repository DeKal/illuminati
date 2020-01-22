package com.dawn.jat.illuminati.post.response;

import java.util.Map;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ErrorResponse {
    private Map<String, Object> error;
    private Boolean success;
}