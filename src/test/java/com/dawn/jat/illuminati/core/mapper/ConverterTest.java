package com.dawn.jat.illuminati.core.mapper;

import static org.hamcrest.CoreMatchers.is;

import static org.hamcrest.MatcherAssert.assertThat;

import com.dawn.jat.illuminati.post.dto.PostDto;
import com.dawn.jat.illuminati.post.entity.PostEntity;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@ExtendWith(MockitoExtension.class)
@SpringBootTest
class ConverterTest {
    private static PostEntity postEntity;
    private static PostDto postDto;
    @Autowired
    Converter converter;

    @BeforeAll
    public static void init() {
        postEntity = new PostEntity("how-to-apply-agile-methodology",
                "How to apply Agile methodology",
                "Guide",
                "01/01/2020",
                new ArrayList<>(Arrays.asList("Agile")),
                "Phat Ho");
        HashMap tags = new HashMap();
        tags.put("System Design", Boolean.TRUE);
        tags.put("OOP", Boolean.TRUE);
        postDto = new PostDto("5e80afe11de7a40da7f97052",
                "how-to-apply-agile-methodology",
                "How to apply Agile methodology new",
                "How to apply Agile methodology new",
                "01/01/2020 new",
                "Li Li new",
                "new content",
                tags);
    }

    @Test
    public void convertPostDtoToEntity_givenDto_returnEntity() {
        PostEntity actualEntity = converter.convertPostDtoToEntity(postDto, postEntity);
        PostEntity expectedPostEntity = new PostEntity("how-to-apply-agile-methodology",
                "How to apply Agile methodology new",
                "How to apply Agile methodology new",
                "01/01/2020 new",
                new ArrayList<>(Arrays.asList("OOP", "System Design")),
                "Li Li new");
        expectedPostEntity.setContent("new content");
        assertThat(actualEntity, is(expectedPostEntity));
    }
}