package com.dawn.jat.illuminati.docs.entity;

import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import java.util.List;

import lombok.Data;
import lombok.Generated;

@Generated
@Data
public class PostSummariesResponse {
    private Boolean success;
    private List<PostSummaryEntity> data;
}
