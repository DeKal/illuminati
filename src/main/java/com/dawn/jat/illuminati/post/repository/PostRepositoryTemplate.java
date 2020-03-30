package com.dawn.jat.illuminati.post.repository;

import com.dawn.jat.illuminati.post.entity.PostEntity;

public interface PostRepositoryTemplate {
    PostEntity savePost(PostEntity post);
}
