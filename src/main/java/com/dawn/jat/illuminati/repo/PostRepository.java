package com.dawn.jat.illuminati.repo;

import com.dawn.jat.illuminati.entities.Post;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends MongoRepository<Post, String> {

    @Query("{ 'title': ?0}")
    List<Post> findByTitle(String title);
}
