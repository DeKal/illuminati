package com.dawn.jat.illuminati.post.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.RequiredArgsConstructor;

import java.util.Map;

@Generated
@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class PostDto {
    private String id;
    private String slug;
    private String title;
    private String brief;
    private String time;
    private String author;
    private String content;
    private Map<String, Boolean> tag;
}
