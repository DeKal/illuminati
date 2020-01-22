package com.dawn.jat.illuminati.post.response;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SuccessResponse {
    private List<?> data;
    private Boolean success;
}
