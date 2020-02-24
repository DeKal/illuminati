package com.dawn.jat.illuminati.post.repository;

import com.dawn.jat.illuminati.post.entity.PostEntity;
import java.util.Optional;

import lombok.Generated;
import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Generated
@Repository
public interface PostRepository extends MongoRepository<PostEntity, String> {
    @Query("{ 'slug' : ?0 }")
    Optional<PostEntity> findBySlug(String slug);

    @DeleteQuery
    void deleteBySlug(String slug);
}
