package com.dawn.jat.illuminati.post.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Configuration
@Repository
public class PostRepositoryTemplateImpl implements PostRepositoryTemplate {
    @Autowired
    MongoTemplate mongoTemplate;
}
