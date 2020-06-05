package com.dawn.jat.illuminati.post.dto;

import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.RequiredArgsConstructor;

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
    private long timeRead;
    private Map<String, Boolean> tag;
}
