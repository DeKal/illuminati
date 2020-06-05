package com.dawn.jat.illuminati.core.mapper;

import com.dawn.jat.illuminati.post.dto.PostDto;
import com.dawn.jat.illuminati.post.entity.PostEntity;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import org.springframework.stereotype.Service;

@Service
public class Converter {
    private  <T> List<String> convertMapKeysToArray(Map<String, T> map) {
        if (Objects.isNull(map)) {
            return Collections.emptyList();
        }
        List<String> list = new ArrayList<>();
        map.forEach((key, value) -> {
            list.add(key);
        });
        return list;
    }

    /**
     * Convert a PostDto to PostEntity.
     */
    public PostEntity convertPostDtoToEntity(PostDto post, PostEntity postEntity) {
        postEntity.setSlug(post.getSlug());
        postEntity.setAuthor(post.getAuthor());
        postEntity.setBrief(post.getBrief());
        postEntity.setTitle(post.getTitle());
        postEntity.setTime(post.getTime());
        postEntity.setContent(post.getContent());
        Map<String, Boolean> tagMap = post.getTag();
        postEntity.setTag(convertMapKeysToArray(tagMap));
        return postEntity;
    }
}
