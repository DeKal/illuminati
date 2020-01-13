package com.dawn.jat.illuminati.post.entity;

import lombok.Data;
import lombok.Generated;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Generated
@Data
@Document(collection = "post")
public class PostEntity {

    @Id
    private String id;
    private String title;
    private String tag;
    private String brief;
    private String time;
}
