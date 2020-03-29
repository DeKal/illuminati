package com.dawn.jat.illuminati.core.convert;

import com.dawn.jat.illuminati.post.dto.PostDto;
import com.dawn.jat.illuminati.post.entity.PostEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Converter {
    public static <T> List<String> convertMapKeysToArray(Map<String, T> map) {
        List<String> list = new ArrayList<>();
        map.forEach((key, value) -> {
            list.add(key);
        });
        return list;
    }

    public static PostEntity convertPostDtoToEntity(PostDto post, PostEntity postEntity) {
        postEntity.setSlug(post.getSlug());
        postEntity.setAuthor(post.getAuthor());
        postEntity.setBrief(post.getBrief());
        postEntity.setTitle(post.getTitle());
        postEntity.setTime(post.getTime());
        postEntity.setContent(post.getContent());
        Map<String, Boolean> tagMap = post.getTag();
        postEntity.setTag(Converter.convertMapKeysToArray(tagMap));
        return postEntity;
    }
}
