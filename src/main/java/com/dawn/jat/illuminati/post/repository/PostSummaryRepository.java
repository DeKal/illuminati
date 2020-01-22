package com.dawn.jat.illuminati.post.repository;

import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostSummaryRepository extends MongoRepository<PostSummaryEntity, String> {
}
