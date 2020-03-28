package com.dawn.jat.illuminati.post.repository;

import com.dawn.jat.illuminati.post.entity.PostEntity;
import java.util.Optional;

import lombok.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PutMapping;

@Generated
@Repository
public interface PostRepository extends MongoRepository<PostEntity, String>, PostRepositoryTemplate {
    @Query("{ 'slug' : ?0 }")
    PostEntity findBySlug(String slug);

    @DeleteQuery
    void deleteBySlug(String slug);
}
