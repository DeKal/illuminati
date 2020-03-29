package com.dawn.jat.illuminati.core.convert;

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
}
