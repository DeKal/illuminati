package com.dawn.jat.illuminati.service;

import com.dawn.jat.illuminati.entities.Post;
import com.dawn.jat.illuminati.repo.PostRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<Post> findByTitle(String title) {
        return postRepository.findByTitle(title);
    }
}
