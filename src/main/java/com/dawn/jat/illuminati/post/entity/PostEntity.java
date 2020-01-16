package com.dawn.jat.illuminati.post.entity;

import lombok.Data;
import lombok.Generated;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Generated
@RequiredArgsConstructor
@Data
@Document(collection = "post")
public class PostEntity {

    @Id
    @NonNull
    private String id;
    @NonNull private String title;
    @NonNull private String tag;
    @NonNull private String brief;
    @NonNull private String time;
    private long numbersView;
    private long numbersComment;
    private long numbersLike;
}