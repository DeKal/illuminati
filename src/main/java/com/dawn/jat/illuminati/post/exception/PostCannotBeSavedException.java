package com.dawn.jat.illuminati.post.exception;

public class PostCannotBeSavedException extends RuntimeException {
    private String msg;

    public PostCannotBeSavedException(String msg) {
        this.msg = msg;
    }

    @Override
    public String getMessage() {
        return this.msg;
    }
}
