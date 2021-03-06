package com.dawn.jat.illuminati.post.repository;

import com.dawn.jat.illuminati.post.entity.PostEntity;
import lombok.Generated;
import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Generated
@Repository
public interface PostRepository extends
        MongoRepository<PostEntity, String>, PostRepositoryTemplate {
    PostEntity findBySlug(String slug);

    @DeleteQuery
    void deleteBySlug(String slug);
}
