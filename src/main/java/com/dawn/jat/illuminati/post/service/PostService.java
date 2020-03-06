package com.dawn.jat.illuminati.post.service;

import com.dawn.jat.illuminati.post.entity.PostEntity;
import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import com.dawn.jat.illuminati.post.repository.PostRepository;
import com.dawn.jat.illuminati.post.repository.PostSummaryRepository;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PostService {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PostSummaryRepository postSummaryRepository;

    public List<PostSummaryEntity> findPostSummary() {
        return postSummaryRepository.findAll();
    }

    public PostEntity findBySlug(String slug) {
        return postRepository.findBySlug(slug);
    }

    public PostEntity createOrUpdate(PostEntity postEntity) {
        return postRepository.save(postEntity);
    }

    public void deleteBySlug(String slug) {
        postRepository.deleteBySlug(slug);
    }

    public int calculateReadingTimePost(PostEntity postEntity){
        double noOfWords = 0;
        double minutes = 0;
        double wordsPerMinute = 200;
        if(Objects.nonNull(postEntity)) {
            noOfWords = postEntity.getContent().split("\\s+").length;
        }
        minutes = noOfWords / wordsPerMinute;
        return (int) Math.ceil(minutes);
    }

    public void updateTimeReadAfterEditedDataOfPost(PostEntity postEntity){
        int timeRead = calculateReadingTimePost(postEntity);
        postEntity.setTimeRead(timeRead);
        postEntity.set_id(postEntity.get_id());
        updateDataOfPostInDb(postEntity);
    }

    public void updateDataOfPostInDb(PostEntity postEntity) {
        postRepository.save(postEntity);
    }
}
