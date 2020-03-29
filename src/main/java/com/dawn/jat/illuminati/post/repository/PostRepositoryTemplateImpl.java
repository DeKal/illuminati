package com.dawn.jat.illuminati.post.repository;

import com.dawn.jat.illuminati.post.entity.PostEntity;
import lombok.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Generated
@Configuration
@Repository
public class PostRepositoryTemplateImpl implements PostRepositoryTemplate {
    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public PostEntity savePost(PostEntity post) {
        return mongoTemplate.save(post);
    }
}
