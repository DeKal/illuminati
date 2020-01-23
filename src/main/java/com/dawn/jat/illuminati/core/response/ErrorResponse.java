package com.dawn.jat.illuminati.core.response;

import java.util.LinkedHashMap;
import java.util.Map;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ErrorResponse {
    private Map<String, Object> error;
    private final Boolean success = false;

    /**
     * Error Response.
     *
     * @param httpStatus HttpStatus
     * @param exception Exception
     */
    public ErrorResponse(HttpStatus httpStatus, Exception exception) {
        error = new LinkedHashMap<>();
        error.put("code", httpStatus.value());
        error.put("message", exception.getMessage());
    }
}