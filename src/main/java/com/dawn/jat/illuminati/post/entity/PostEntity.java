package com.dawn.jat.illuminati.post.entity;

import lombok.Data;
import lombok.Generated;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Generated
@RequiredArgsConstructor
@Data
@Document(collection = "post")
public class PostEntity {
    @Id
    private String id;
    @NonNull private String slug;
    @NonNull private String title;
    @NonNull private String brief;
    @NonNull private String time;
    @NonNull private List<String> tag;
    @NonNull private String author;
    private String content;
    private long viewNum;
    private long commentNum;
    private long likeNum;
}
