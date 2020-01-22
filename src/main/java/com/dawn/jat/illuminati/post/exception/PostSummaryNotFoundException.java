package com.dawn.jat.illuminati.post.exception;

public class PostSummaryNotFoundException extends RuntimeException {
    private String errorMsg;

    public PostSummaryNotFoundException(String errorMsg) {
        this.errorMsg = errorMsg;
    }

    @Override
    public String getMessage() {
        return this.errorMsg;
    }
}
