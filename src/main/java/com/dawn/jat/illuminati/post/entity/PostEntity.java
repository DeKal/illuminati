package com.dawn.jat.illuminati.post.entity;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Generated
@RequiredArgsConstructor
@Data
@Document(collection = "post")
public class PostEntity {
    @Id
    private ObjectId _id;
    @NonNull private String slug;
    @NonNull private String title;
    @NonNull private String brief;
    @NonNull private String time;
    @NonNull private String[] tag;
    @NonNull private String author;
    private int timeRead;
    private String content;
    private long viewNum;
    private long commentNum;
    private long likeNum;

    // ObjectId needs to be converted to string
    public ObjectId get_id() { return ObjectId.get(); }
    public void set_id(ObjectId _id) { this._id = _id; }
}
