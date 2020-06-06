package com.dawn.jat.illuminati.docs.entity;

import com.dawn.jat.illuminati.post.entity.PostEntity;
import lombok.Data;
import lombok.Generated;

@Generated
@Data
public class GetPostResponse {
    private Boolean success;
    private PostEntity data;
}
