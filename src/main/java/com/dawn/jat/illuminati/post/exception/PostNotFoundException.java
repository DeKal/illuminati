package com.dawn.jat.illuminati.post.exception;

public class PostNotFoundException extends RuntimeException {
    private String msg;

    public PostNotFoundException(String msg) {
        this.msg = msg;
    }

    @Override
    public String getMessage() {
        return this.msg;
    }
}
